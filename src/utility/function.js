export function testUntilPass(test, onPass, interval = 100) {
  var result = false;
  function performTest(cleanup = () => null) {
    try {
      result = test();
    } catch (e) {}
    if (result) {
      cleanup();
      onPass();
    }
  }
  performTest();
  if (!result) {
    const callbackTimer = setInterval(
      () => performTest(() => clearInterval(callbackTimer)),
      interval
    );
    return callbackTimer;
  } else {
    return null;
  }
}
