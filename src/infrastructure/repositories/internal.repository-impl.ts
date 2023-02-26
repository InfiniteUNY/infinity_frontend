import { inject, singleton } from 'tsyringe';
import { InternalRepository } from '@/domain/repositories';
import { SessionStorageDataSource } from '@/infrastructure/datasources';

@singleton()
export class InternalRepositoryImpl implements InternalRepository {
  private readonly sessionStorageDataSource: SessionStorageDataSource;

  public constructor(
    @inject('SessionStorageDataSource')
    sessionStorageDataSource: SessionStorageDataSource,
  ) {
    this.sessionStorageDataSource = sessionStorageDataSource;
  }

  public getSidebarExtendedState(): boolean {
    return this.sessionStorageDataSource.get<boolean>('sidebar-extended');
  }

  public setSidebarExtendedState(state: boolean): void {
    this.sessionStorageDataSource.set<boolean>('sidebar-extended', state);
  }
}
