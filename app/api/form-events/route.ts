import { subscribe } from "@/lib/form-events";

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let closed = false;

      const unsubscribe = subscribe((event) => {
        if (closed) return;

        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(event)}\\n\\n`)
          );
        } catch {
          closed = true;
          unsubscribe();
        }
      });

      controller.enqueue(encoder.encode("data: connected\\n\\n"));

      const heartbeat = setInterval(() => {
        if (closed) return;

        try {
          controller.enqueue(encoder.encode(":\\n\\n"));
        } catch {
          closed = true;
          clearInterval(heartbeat);
          unsubscribe();
        }
      }, 15000);

      return () => {
        closed = true;
        clearInterval(heartbeat);
        unsubscribe();
      };
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}