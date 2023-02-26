export abstract class InternalRepository {
  public abstract getSidebarExtendedState(): boolean;
  public abstract setSidebarExtendedState(state: boolean): void;
}
