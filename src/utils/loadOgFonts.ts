import { readFile } from "node:fs/promises";
import path from "node:path";
import type { SatoriOptions } from "satori";

// Pretendard covers Hangul; the theme's Google Sans Code does not, so Korean titles rendered blank.
const fontDir = path.join(
  process.cwd(),
  "node_modules/pretendard/dist/public/static"
);

export async function loadOgFonts(): Promise<SatoriOptions["fonts"]> {
  const [regular, bold] = await Promise.all([
    readFile(path.join(fontDir, "Pretendard-Regular.otf")),
    readFile(path.join(fontDir, "Pretendard-Bold.otf")),
  ]);

  return [
    { name: "Pretendard", data: regular, weight: 400, style: "normal" },
    { name: "Pretendard", data: bold, weight: 700, style: "normal" },
  ];
}
