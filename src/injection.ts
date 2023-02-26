import 'reflect-metadata';
import { container } from 'tsyringe';
import { GetSidebarExtendedState, SetSidebarExtendedState } from '@/application/internal';
import { InternalRepositoryImpl } from '@/infrastructure/repositories';
import { SessionStorageDataSourceImpl } from '@/infrastructure/datasources';

export { container };

// Use cases
container.register('GetSidebarExtendedState', { useClass: GetSidebarExtendedState });
container.register('SetSidebarExtendedState', { useClass: SetSidebarExtendedState });

// Repositories
container.register('InternalRepository', { useClass: InternalRepositoryImpl });

// Data sources
container.register('SessionStorageDataSource', { useClass: SessionStorageDataSourceImpl });
