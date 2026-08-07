export async function POST(req: Request) {
  const { user_data } = await req.json().catch(() => ({}));

  const response = await fetch(
    "https://api.bolna.ai/web-call/freeswitch-session",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.BOLNA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: process.env.BOLNA_AGENT_ID,
        user_data,
      }),
    }
  );

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}