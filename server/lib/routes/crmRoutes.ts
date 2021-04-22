import {Request, Response, NextFunction} from "express";
import { TodoController } from "../controllers/crmController";

export class Routes { 
    
    public todoController: TodoController = new TodoController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Contact 
        app.route('/todo')
        .get(this.todoController.getTodos)        

        // POST endpoint
        .post(this.todoController.addNewTodo);

        // Contact detail
        app.route('/todo/:todoId')
        // get specific contact
        .get(this.todoController.getTodoWithID)
        .put(this.todoController.updateTodo)
        .delete(this.todoController.deleteTodo)

    }
}