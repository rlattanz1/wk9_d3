import { async } from "regenerator-runtime";
import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton

    //event listener for 'click' operation
    this.toggleButton.addEventListener("click", (this.handleClick.bind(this)));
    // console.log(this.followState)
  }

  async handleClick(e) {

    e.preventDefault();
    
    this.followState === "followed" ? this.unfollow() : this.follow();

    //event listener logic for 'click'

    // think about using the toggle function
    // on the click function with a ternary calling follow and unfollow maybe???
    // Your code here
  }

  async follow() {
    //follow logic should follow a user and reassign the button to equal unfollow
    // Your code here
    const followUser = await 
    
  }

  async unfollow() {
    // this.unfollow() = this.follow()
    //unfollow logic should unfollow a user and reassign the button to equal follow
    // Your code here
  }

  render() {
    switch (this.followState) {


      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
