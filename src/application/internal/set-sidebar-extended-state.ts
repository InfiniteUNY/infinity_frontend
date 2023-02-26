import { inject, singleton } from 'tsyringe';
import { InternalRepository } from '@/domain/repositories';
import { UseCase } from '@/application/shared';

export type SetSidebarExtendedStateParams = [state: boolean];

@singleton()
export class SetSidebarExtendedState implements UseCase<void, SetSidebarExtendedStateParams> {
  private readonly internalRepository: InternalRepository;

  public constructor(
    @inject('InternalRepository')
    internalRepository: InternalRepository,
  ) {
    this.internalRepository = internalRepository;
  }

  public execute(state: boolean): void {
    this.internalRepository.setSidebarExtendedState(state);
  }
}
