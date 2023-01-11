addEventListener("message", (event: MessageEvent<number>) => {
  const delay = event.data;

  const timer = setInterval(() => {
    postMessage(delay);
  }, delay);
});

export {};
