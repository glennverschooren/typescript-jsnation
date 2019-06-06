/**
 * concatMessages currently accepts 0..n arguments.
 * Change the signature, so that it requires at least one argument!
 */
// function concatMessages(...messages: string[]): string {
  // return messages.join(", ");
// }

function concatMessages(msg1: string, msg2?: string, msg3?: string): string {
  let messages: string[] = [];
  for (let i = 0; i < arguments.length; i++) {
    messages.push(arguments[i]);
  }
  return messages.join(", ");
}

// Correct invocations
concatMessages("Hello");
concatMessages("Hello", "World");

// These lines should all trigger compile errors:
concatMessages(); // Make sure this errors! at least one string is required
concatMessages("Hello", 42);
concatMessages(1, 2, 3);
