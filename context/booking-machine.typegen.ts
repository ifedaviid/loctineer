// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "xstate.init": { type: "xstate.init" };
    "xstate.stop": { type: "xstate.stop" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    resetContext: "" | "xstate.stop";
    saveExtensionUsage:
      | "ADDING_EXTENSIONS"
      | "EXIT"
      | "IGNORE_ADDING_EXTENSIONS"
      | "NOT_ADDING_EXTENSIONS"
      | "xstate.stop";
    saveService: "BOOK_APPOINTMENT";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    addingExtensions: "PREV";
    canNotUseExtensions: "NEXT";
    canUseExtensions: "NEXT";
    notAddingExtensions: "PREV";
  };
  eventsCausingDelays: {};
  matchesStates:
    | "idle"
    | "selectExtensionLength"
    | "selectExtensionUsage"
    | "selectHairLength"
    | "selectSchedule"
    | "serviceProfile";
  tags: never;
}
