declare global {
  interface Window {
    trackEvent?: (eventName: string, eventData?: Record<string, any>) => void;
  }
}

export {};
