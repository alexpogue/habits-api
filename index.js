import axios from "axios";

export default class HabitApi {
  // baseUri should be something like `http://192.168.0.1:5000/`
  constructor(baseUri) {
    this.apiCaller = axios.create({
      baseURL: baseUri,
    });
  };

  // Gets all goals from the goal api.
  async getAllGoals() {
    const result = await this.apiCaller("goal/");
    return result.data.data;
  };

  // Gets a goal with matching goalId if invoked with a goalId.
  async getGoal() {
    const result = await this.apiCaller("goal/" + goalId);
    return result.data.data;
  };

  // Posts a single goal to the goalAPI, returns with the new goal array.
  async postGoal(data) {
    await this.apiCaller.post("goal/", { name: data });
    const newGoalArray = await this.apiCaller("goal/");
    return newGoalArray.data.data;
  };

  // Updates/puts a single goal if invoked with a new name, and the id of goal you wish to change.
  async putGoal(data, id) {
    await this.apiCaller.put(`goal/${id}`, { name: data });
    const newGoalArray = await this.apiCaller("goal/");
    return newGoalArray.data.data;
  };

  //Deletes a goal given a specific Id from the database.
  async deleteGoal(id) {
    await this.apiCaller.delete(`goal/${id}`)
    const newGoalArray = await this.apiCaller("goal/");
    return newGoalArray.data.data;
  };
}
