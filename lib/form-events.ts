export type FormField = "full_name" | "phone_number";

export type FormUpdateEvent = {
  field: FormField;
  value: string;
};

type Listener = (event: FormUpdateEvent) => void;

declare global {
  var __formListeners:
    | Set<Listener>
    | undefined;
}

const listeners =
  globalThis.__formListeners ??
  (globalThis.__formListeners =
    new Set<Listener>());

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function publish(event: FormUpdateEvent) {
  for (const listener of listeners) {
    listener(event);
  }
}