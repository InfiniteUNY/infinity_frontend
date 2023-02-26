import { inject, singleton } from 'tsyringe';
import { InternalRepository } from '@/domain/repositories';
import { UseCase } from '@/application/shared';

@singleton()
export class GetSidebarExtendedState implements UseCase<boolean> {
  private readonly internalRepository: InternalRepository;

  public constructor(
    @inject('InternalRepository')
    internalRepository: InternalRepository,
  ) {
    this.internalRepository = internalRepository;
  }

  public execute(): boolean {
    return this.internalRepository.getSidebarExtendedState();
  }
}
