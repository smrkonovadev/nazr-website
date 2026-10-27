import { DotLottie } from "@dotlottie/dotlottie-js";
import fs from "fs";
import path from "path";

const files = [
  { src: "public/images/SOS Default.json", name: "sos_default" },
  { src: "public/images/sos_hand.json", name: "sos_hand" },
  { src: "public/images/sos2.json", name: "sos2" },
  { src: "public/images/sos3.json", name: "sos3" },
  { src: "public/images/SH_SM ARM Turn On.json", name: "sh_sm_arm" },
  { src: "public/images/SH_Trusted Circle.json", name: "sh_trusted_circle" },
  { src: "public/images/SH_Trigger.json", name: "sh_trigger" },
];

const outDir = "public/lottie/homepage";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function convert() {
  console.log("Converting homepage Lotties to .lottie format...\n");

  for (const f of files) {
    if (!fs.existsSync(f.src)) {
      console.warn(`File not found: ${f.src}`);
      continue;
    }

    const jsonContent = fs.readFileSync(f.src, "utf-8");
    const jsonParsed = JSON.parse(jsonContent);

    // Also copy the original JSON into public/lottie/homepage
    const jsonOutPath = path.join(outDir, `${f.name}.json`);
    fs.writeFileSync(jsonOutPath, jsonContent);

    // Create DotLottie instance
    const dotLottie = new DotLottie();
    dotLottie.addAnimation({
      id: f.name,
      data: jsonParsed,
    });

    const lottieBuffer = await dotLottie.toArrayBuffer();
    const lottieOutPath = path.join(outDir, `${f.name}.lottie`);
    fs.writeFileSync(lottieOutPath, Buffer.from(lottieBuffer));

    const originalSize = (Buffer.byteLength(jsonContent) / 1024).toFixed(1);
    const lottieSize = (lottieBuffer.byteLength / 1024).toFixed(1);
    const savings = (((originalSize - lottieSize) / originalSize) * 100).toFixed(1);

    console.log(`✓ ${f.name}:`);
    console.log(`  JSON:   ${originalSize} KB`);
    console.log(`  LOTTIE: ${lottieSize} KB (-${savings}% reduction)\n`);
  }

  console.log("All homepage animations exported to public/lottie/homepage/!");
}

convert().catch(console.error);
