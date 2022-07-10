#! /usr/bin/env ts-node
import { generateSpec, ExtendedSpecConfig } from "tsoa";

(async () => {
  const specOptions: ExtendedSpecConfig = {
    basePath: "/api",
    entryFile: "",
    specVersion: 3,
    outputDirectory: "./api-spec",
    controllerPathGlobs: ["./src/**/controller.ts"],
    noImplicitAdditionalProperties: "throw-on-extras"
  };

  await generateSpec(specOptions);
})();
