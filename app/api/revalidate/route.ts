import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { secret, tag } = await req.json();

  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag(tag, "max");
  return Response.json({ revalidated: true, tag });
}
