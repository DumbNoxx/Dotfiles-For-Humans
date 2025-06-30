import type { Dispatch, SetStateAction } from "react";

type SetActiveFunction = Dispatch<SetStateAction<boolean>>;
class AccordionManager {
  private currentActive: SetActiveFunction | null = null;

  setActive(instance: SetActiveFunction, action: SetStateAction<boolean>) {
    if (typeof action === undefined) {
      throw new Error("Function updater nor supported");
    }

    const isActive = action;
    if (isActive) {
      // Si se está activando, desactivar el anterior
      if (this.currentActive && this.currentActive !== instance) {
        this.currentActive(false);
      }
      this.currentActive = instance;
    } else if (this.currentActive === instance) {
      this.currentActive = null;
    }
  }
}

export const accordionManager = new AccordionManager();
