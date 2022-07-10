import {Request,Response} from "express";
import pool from '../database';

class GamesController{
      public async list (req:Request,resp:Response){
         //pool.query('DESCRIBE games');
         const games = await pool.query('SELECT * FROM games');
         resp.json(games);


          resp.json({text:'Listing games'});
          // resp.send('Games');
  } 

  public async getOne(req: Request,resp:Response):Promise<any>{
    const {id} = req.params;
    const games =await pool.query('SELECT * FROM games WHERE id =?',[id]);
    if(games.length >0)
    {
      return resp.json(games[0])
    }
    resp.status(404).json({text : 'The game doesn´t exist'});
  }

  public async crate(req:Request, resp: Response):Promise<void>{

    console.log(req.body);
    await pool.query('INSERT INTO gamesset?',[req.body]);
    resp.json({message : 'Games Saved'})
  }

  public create(req: Request, resp:Response){
    console.log(req.body);
    resp.json({text : 'creating a game'});
  }

  public async delete (req: Request,resp:Response):Promise<void>{
    const {id}= req.params;
    await pool.query('DELETE FROM games WHERE id =?',[id]);
    resp.json({message:  'The   game was delete '});
  }

  public async update(req:Request, resp: Response):Promise<void>{
    const {id} = req.params;
    await pool.query('UPDATE games set? WERE id =?',[req.body,id]);
    resp.json({message :'The game was Updated' });
  }

} 
export const gamesController = new GamesController(); 

