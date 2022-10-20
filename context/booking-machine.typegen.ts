// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
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
    saveExtensionUsage:
      | "ADDING_EXTENSIONS"
      | "IGNORE_ADDING_EXTENSIONS"
      | "NOT_ADDING_EXTENSIONS"
      | "SET_SERVICE"
      | "SET_SERVICE_TYPE"
      | "xstate.stop";
    saveService: "SET_SERVICE";
    saveServiceType: "SET_SERVICE_TYPE";
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
    | "appointmentDate"
    | "confirmAndReview"
    | "contactAndPaymentInfo"
    | "reviewInfo"
    | "selectExtensionLength"
    | "selectExtensionUsage"
    | "selectHairLength"
    | "selectService"
    | "selectServiceType";
  tags: never;
}
