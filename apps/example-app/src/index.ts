import { Command } from 'commander';
import { Test } from '@xsofo/test-lib';

const program = new Command();

const value = Test('testing parameter');

console.log(value);

program.version('1.0').description('rush test program');

program
  .command('test <parameter>')
  .option('--hello', 'say hello to parameter')
  .description(`echo the parameter`)
  .action(
    async (parameter: string, options: Record<string, string | boolean>) => {
      if (options.hello) {
        console.log(`Hello ${parameter}`);
        return;
      }

      console.log(`Passed parameter ${parameter}.`);
    }
  );

program.parse(process.argv);
