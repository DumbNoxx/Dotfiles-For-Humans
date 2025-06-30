type SetActiveFunction = (active: boolean) => void;

class AccordionManager {
  private currentActive: SetActiveFunction | null = null;

  setActive(instance: SetActiveFunction, isActive: boolean) {
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
