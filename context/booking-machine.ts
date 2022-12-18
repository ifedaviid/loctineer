import { createMachine, assign } from "xstate";
import { StaticImageData } from "next/image";
import { ServiceType } from "../types/service-type";
import { Service } from "../types/service";
import { AppImage } from "../types/image";

export enum ServiceCategory {
  INSTALLATION = "Installation",
  MAINTENANCE = "Maintenance",
}

export interface ExtensionLength {
  category: string;
  image: AppImage;
}

export interface HairLength {
  category: string;
  image: AppImage;
}

// ***********************************

/** @xstate-layout N4IgpgJg5mDOIC5QCMD2qDWBLAdlAtAGYA2qA7gHSxjFgDGALgMpgBOAblnWACoCeABzABiAHIBRABo8A2gAYAuolADUsLAyyocykAA9EANgCsARgrHDAJgAsADkty7AZgCcAdmcAaEH0RXLCzlgq1c7OxtDG09jAF9YnzRMXAIScioaemY2Tm4xKVlFXVV1TW1dAwQTc0tbB0MnN08fPwRjOWMKQ273ORsbJzlTK274xPRsPCJSSmpaRhYOLhEJaRlTJSQQEo0tHS3K01M5Qwo7Vw6Xdztrq1MWxGdIimDX5xuB65OxkCTJ1JmGXm2SWeQACgAlcQANXkmxUal25QOiDsHQox1c72M7g8rmM0QeCCsfSCrzsVhupjMdh+fxS03Scyy4j0DDAOHU2gAqrAAIYwYQATXETDhxURZX2oEqlLkZ2GZnanjRkUMRPcVisFBspkM7mMzhCznc7kMdImDLSs0yjFZ7M5e15ApEAEkAOKiADyUPFWx2Uoq-jRCoC1LkKr63SJ7xsGJ6lIpd0MzmccQSv0tU2tQJZbI5XJwzsF3r9CNKeyDxJDdkV4cjaqJFIorlbrfc9gifQtyWzgOZdvzju0ABkOVAGAALfJrIr+yWVlFVMwWaz2RwuDzeXxGOSuLrdBr6swDVs9-6Mm3A+0FvZjvBT4SQmFl7YL5Eyowr2rrhqb5o7m0OIHt0xhgbi7hHFY55Wv2toMAAEnyWCsPeE7Ts+sJzuWSLSvoiBHA0FiRJ4Tgksq7gas45h6t0NweMY+KRDBfZMvBSEoWhj6Yes8JvhWH74QgRzHBitj4uc2KuNGgFuHYLyvAE0TUp45oZvSrFXlkHGoeOj6rIUfEBoun7CdR8rnB0+KppJIxNmB8bdGEprRHItgsQC6R8gIqi4AwAC2HIMAAIny7JPlCWFGe+eGHMcpyWcYVw3BS9yARc7iOZqcgmnceIeZeFDeb5OABUFoXhQZr7GYJlSqi2hh2MeHSWJENj2dqh6GM5Ha9O56lZp5lB0NoDB8owACCOAQGCfJ8IFpWujghCoDOhkSgJsVfjUa71I0W5EscTggdYViQWB+LQQNvZDRQI2leNDBTTNc0LQwS0rRFL7YfxuFVtUq51BuTTbq0Fxxoe2W5aY+XXReOb3YQKH+c9EJgJwYBkGt1UxVWRwnGcFxJSaKV3IdIRnKmRquAEuL9LScOwekiPI6j6NYJjX1RRtf1LminSYtiEFMZR6WBJDurSVLabxBmOCoBAcC6Bpt0DiCuS8IIYA84GS66uYNOmA4RyuJEptpa0yYgZBzhWE8erBGp4w3YVauLBrOsmUJrh6mcHZhPbKaeKDjxEZDTipU4KbOAVOZqzew5FvyMCe7ViA2FYGp7i2tFmnuwdXc78NwdeQ6Flxk6p1tCADJ0kF7tSe1apngGatqPt0bTJhou4scl9pyG6Q+lfzpteM2LbFC4o1qZne81jqoBDSZV1pqmKaJKNX3Xk+agflvRV2uj7zpk+-uE8doYdappBTathQVPvE8biUoXmYuwjo2Pc9s3zUFH2oCrlWJoD9GLvD3CYKIRwiStgFoePUdsUyRBjozTSd1tBI1YCjaaaMMZkCAUuDufsbAB11EHVM5McoPyptPK4uoGZFyZpQVg7NMYAIIaZUwE9tS0NniqBelDtQuFTJYYwAR3g+23vg4+utTL4EXq0eRClXgqNUb3WWQA */
interface Appointment {
  serviceType: ServiceType;
  service: Service;
  addingExtensions: boolean;
  extensionLength: ExtensionLength;
  hairLength: HairLength;
}

const initialContextState: Appointment = {
  serviceType: null,
  service: null,
  addingExtensions: false,
  extensionLength: null,
  hairLength: null,
};

type Event =
  | { type: "PREV" }
  | { type: "NEXT" }
  | { type: "BOOK_APPOINTMENT"; service: Service }
  | { type: "IGNORE_ADDING_EXTENSIONS"; addingExtensions: boolean }
  | { type: "ADDING_EXTENSIONS"; addingExtensions: boolean }
  | { type: "NOT_ADDING_EXTENSIONS"; addingExtensions: boolean }
  | { type: "SAVE_EXTENSION_LENGTH"; extensionLength: ExtensionLength }
  | { type: "SAVE_HAIR_LENGTH"; hairLength: HairLength }
  | { type: "EXIT" };

export const bookingMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QCMD2qDWBLAdlAtAGYA2qA7gHSxjFgDGALgMpgBOAblnWACoCeABzABiAHIBRABo8A2gAYAuolADUsLAyyocykAA9EADgDMAdgoA2UwEZDAVmNWALHKcAmOwBoQfRAE57Cjs5OQs7Q1M-N1tIgF9Y7zRMXAIScioaemY2Tm4xKVlFXVV1TW1dAwQTcytbB2dXD29fBAs-OSCQ4wi5CMNraz94xPRsPCJSSmpaRhYOLhEJaRlrJSQQEo0tHXXK62M5NwpTYydHQzlgtyivH0RTC2sKduC-F1dTEzthkCSx1MmGRm2XmeQACgAlcQANXkaxUai25V2-j8T2iEWMfhOpjk2MMzX8xmMnUubmuWL8VKGCV+oxSE3S0yy4j0DDAOHU2gAqrAAIYwYQAQQAIiKAJKiADiAH0CuJRExxQB5RVw4qIso7UCVA5OCiGNz9OTWCxmbpuRyEhBnCwUDxyYyDNwWNymJxOCw-P4MtJTTKMVnsznbXkCxbKngy0US6Vy6QKpWqpjq9abLUVRB6g1G6wms0nQ1Wu5VEkhEJOd12E5OU2Gb308Z+oEstkcrk4MOC8VS0TKqHRsWS2XyxUqtVFNOa7aZhDZw3G03mosWa12NoUctOtGPGyfBvJJuA5mBtsh7QAGQ5UAYAAt8stJwjSjOUaWajZ7I53Y1bi03K4pIDA4JhnNWTgHv8jL+sCQbttsV54HewiQjCqbPki2r6EYZiWJ+9Q-u4f6IB65jBIcdjWJa66WoYXq0j6R5MgGDAABJ8lgrCITe96obCT4bNOyI6og+zrhQWKhHqlyGH4xLWsYLqbiEtjEnidjXPWDGNgCzHAuxnHcchfErPCgkvsJ2EIPslzPBYfTkrWETWE41r9CSLzkgE67YvskG+seLEGVx17IUshRmemr4idZwR2jW3SmA8+wetaeYuMpciRJ6HpmPRIyHrplB8gIqi4AwAC2HIMCKfLsihUL8ZFQlYXsBxHAl9mXIcNxpXiRzlnJrh+GEZpaQVUHNiVZU4JV1W1fV4XoeZmGzlSTxZf0AGRIpeV9bh5HZRYuUPP5TGUHQ2gMHyjBCjgEBgnyfBVbN4o4IQqAPhFGoWa1OEfnU34uERaWDCSwRUYcAF4hB2mFdBFCXbNN0MHdD1PS9DBvR9DVoQJUWWZU1R4YDDQgyWeayaSQ1OCN67dGdRWI9ohCcRVaMQmAnBgGQX3LQTf3We1xynOc3XXE0FMxJYVhou4gyHJcjMI0jrOsOz92c9zvMmfjLVrWi9oxFiOJ4p8oO1p0eYWGaTgRBpyt+sITDiFGLsQtC4oAMLiDKPAAJpguI-P62+7jWn4DjPNYpjRK6jqVmajuTM7rsyu7ns+yHv2zuHJafIYxzBOc7x2HYNK0jgqAQHAuiMUzJ4grkvCCGAP2rW+jwki4rpqbH654hHSUyychz9PZlpuMnelZHMzftxmb4DNEFCmi4Djl8Ydiem4bm9EEn6FuPoSmNPMGtsGHZdm3U452Hu8lsdRx5h8uK9IYhiemfLanpfCGhbeBe0UrLlyeIaHqFw2hhFMMRG0jgi5kkUmcXohxYYTQCjPRgwUjKANvh3GKpojSWB7qcH8VFXL53Ls8Mk2JvIDDRN-aaqByqYwWjfDCi8CHAQoLWHuHhFKfz6p-VeVh2rb3dLYfKdJ4bNiRtdW691HrPWqtjVAQDCaIHCN3eyEiLj2ACA-FoAwLiZS+FlZwNtv6qzZhzLmWAebqMFgMKizxP7fiSgBGOsDjGFzrMYwYcl1zf1YHYnmqjHGzkIYXY6UlKwuHIaDCII9I6fzXmcca0jJqTAiW+fAq4Sx5MyuWYp5YjTxHiEAA */
  createMachine(
    {
      context: { ...initialContextState },
      schema: {
        context: {} as Appointment,
        events: {} as Event,
      },
      preserveActionOrder: true,
      predictableActionArguments: true,
      id: "booking-flow",
      initial: "idle",
      states: {
        idle: {
          /* Eventless Transition:
           This immediately transitions into its target state
           Without waiting on an event to be fired. */
          always: [{ target: "serviceProfile" }],
          // Reset context to initial form on exit.
          exit: "resetContext",
        },
        serviceProfile: {
          on: {
            BOOK_APPOINTMENT: {
              // internal: true,
              target: "selectExtensionUsage",
              actions: "saveService",
            },
            NEXT: [
              {
                target: "selectExtensionUsage",
                cond: "canUseExtensions",
              },
              {
                target: "selectHairLength",
                cond: "canNotUseExtensions",
              },
            ],
          },
        },
        selectExtensionUsage: {
          exit: "saveExtensionUsage",
          on: {
            ADDING_EXTENSIONS: {
              target: "selectExtensionLength",
            },
            NOT_ADDING_EXTENSIONS: {
              target: "selectHairLength",
            },
            IGNORE_ADDING_EXTENSIONS: {
              target: "serviceProfile",
            },
          },
        },
        selectExtensionLength: {
          exit: "saveExtensionLength",
          on: {
            SAVE_EXTENSION_LENGTH: {
              target: "selectHairLength",
            },
            PREV: {
              target: "idle",
            },
          },
        },
        selectHairLength: {
          exit: "saveHairLength",
          on: {
            SAVE_HAIR_LENGTH: {
              target: "selectSchedule",
            },
            PREV: [
              {
                target: "selectExtensionLength",
                cond: "addingExtensions",
              },
              {
                target: "idle",
                cond: "notAddingExtensions",
              },
            ],
          },
        },
        selectSchedule: {
          on: {
            PREV: {
              target: "selectHairLength",
            },
            NEXT: {
              target: "comfirmBooking",
            },
          },
        },
        comfirmBooking: {
          on: {
            NEXT: {
              target: "idle",
            },
          },
        },
      },
      // event definitions
      on: { EXIT: { target: ".idle" } },
    },
    {
      // actions and guards
      actions: {
        saveService: assign({
          service: (context, event) => {
            if (!event["service"].canUseExtensions)
              context.addingExtensions = false;
            return event["service"];
          },
        }),
        saveExtensionUsage: assign({
          addingExtensions: (_context, event) => event["addingExtensions"],
        }),
        saveExtensionLength: assign({
          extensionLength: (_context, event) => event["extensionLength"],
        }),
        saveHairLength: assign({
          hairLength: (_context, event) => event["hairLength"],
        }),
        resetContext: assign({
          serviceType: null,
          service: null,
          addingExtensions: false,
          extensionLength: null,
          hairLength: null,
          ...initialContextState,
        }),
      },
      guards: {
        canUseExtensions: (context) => context.service.canUseExtensions,
        canNotUseExtensions: (context) => !context.service.canUseExtensions,
        addingExtensions: (context) => context.addingExtensions,
        notAddingExtensions: (context) => !context.addingExtensions,
      },
    }
  );
