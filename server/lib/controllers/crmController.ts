import * as mongoose from 'mongoose';
import { TodoSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Todo = mongoose.model('Todo', TodoSchema);

export class TodoController {

    public addNewTodo(req: Request, res: Response) {
        let newTodo = new Todo(req.body);
        console.log(req.body);
        newTodo.save((err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }

    public getTodos(req: Request, res: Response) {
        Todo.find({}, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }

    public getTodoWithID(req: Request, res: Response) {
        Todo.findById(req.params.todoId, (err, todo) => {

            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }

    public updateTodo(req: Request, res: Response) {
        Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }

    public deleteTodo(req: Request, res: Response) {
        Todo.remove({ _id: req.params.todoId }, (err, todo: void) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Todo!' });
        });
    }

}