import habit from "./instance";

export default class HabitApi {
  // Gets all goals from the goal api.
  async function getAllHabitGoals() {
    const result = await habit("goal/");
    return result.data.data;
  };

  // Gets a goal with matching goalId if invoked with a goalId.
  async function getHabitGoal() {
    const result = await habit("goal/" + goalId);
    return result.data.data;
  };

  // Posts a single goal to the goalAPI, returns with the new goal array.
  async function postHabitGoal() {
    await habit.post("goal/", { name: data });
    const newGoalArray = await habit("goal/");
    return newGoalArray.data.data;
  };
}
