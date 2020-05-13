import axios from "axios";

export default class HabitApi {
  // baseUri should be something like `http://192.168.0.1:5000/`
  constructor(baseUri) {
    this.apiCaller = axios.create({
      baseURL: baseUri,
    });
  };

  // Gets all goals from the goal api.
  async getAllHabitGoals() {
    const result = await this.apiCaller("goal/");
    return result.data.data;
  };

  // Gets a goal with matching goalId if invoked with a goalId.
  async getHabitGoal() {
    const result = await this.apiCaller("goal/" + goalId);
    return result.data.data;
  };

  // Posts a single goal to the goalAPI, returns with the new goal array.
  async postHabitGoal(data) {
    await this.apiCaller.post("goal/", { name: data });
    const newGoalArray = await this.apiCaller("goal/");
    return newGoalArray.data.data;
  };
}
