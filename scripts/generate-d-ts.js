/* eslint-disable no-restricted-syntax */
const fs = require('fs-extra');
const { Command } = require('commander');
const { globSync } = require('glob');

const CONTENT_WEB = `import type { JSX, SVGProps } from 'react';
type SVGWebComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;\n
`;
const CONTENT_NATIVE = `import type { JSX } from 'react';
import type { SvgProps } from 'react-native-svg';
type SVGNativeComponent = (props: SvgProps) => JSX.Element;\n
`;

const program = new Command();

program
  .argument('<entries...>', 'specify the entries', value => value.split(','))
  .option('-n, --native', 'generate types for react-native', false)
  .action((entries, options) => {
    let content = options.native ? CONTENT_NATIVE : CONTENT_WEB;
    const files = globSync(entries);

    for (let i = 0; i < files.length; i++) {
      const file = fs.readFileSync(`./${files[i]}`, {
        encoding: 'utf8',
      });
      const matches = file.matchAll(/import\s+([A-Za-z]+?[0-9]*?)\s+from/g);

      for (const match of matches) {
        content += options.native
          ? `export declare const ${match[1]}: SVGNativeComponent; \n`
          : `export declare const ${match[1]}: SVGWebComponent; \n`;
      }
    }
    const dir = options.native
      ? './dist/typings/native/index.d.ts'
      : './dist/typings/index.d.ts';

    fs.outputFileSync(dir, content);
  });

program.parse(process.argv);
