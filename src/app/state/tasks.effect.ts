import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, mergeMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { fetchTasksList, setTasks } from './tasks.actions';
import { Tasks } from './tasks.interfaces';

@Injectable()
export class TasksEffects {
    getTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchTasksList.type),
            mergeMap(() =>
                this.apiService.getTasks().pipe(
                    concatMap((tasks) => {
                        const fetchedTasks = {} as Tasks;
                        tasks?.map(task => {
                            fetchedTasks[task.id] = task;
                        })
                        console.log('effect', fetchedTasks);
                        return [setTasks({ fetchedTasks })];
                    }
                    )
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }
}
