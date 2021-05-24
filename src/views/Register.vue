<template>
  <div>
    <div class="grid-container">
      <div class="grid-item grid-item-3 nav"></div>
      <div class="grid-item grid-item-1">
        <div @click=" router('/')" class="logo-text">
          <img style="width:40px; heignt:40px;" src="../images/worldwide.png" alt />
          <p>aqi</p>
        </div>
        <div class="button-parent">
          <div @click=" router('/register')" class="button" style>
            <p>Register</p>
          </div>
        </div>
      </div>
      <div class="grid-item grid-item-2">
        
        <div class="centered-container">
          <div class="md-content-parent">
            <md-content class="md-elevation-3">
              <div class="title">
                <img src="../images/worldwide.png" />
                <div class="md-headline">AQI</div>
                <div class="md-subheading">Select country and login to continue</div>
              </div>

              <md-autocomplete v-model="selectedCountry" :md-options="countries">
                <label>City</label>
              </md-autocomplete>

              <div class="form">
                <md-field>
                  <label>E-mail</label>
                  <md-input v-model="login.email"></md-input>
                </md-field>

                <md-field md-has-password>
                  <label>Password</label>
                  <md-input v-model="login.password" type="password"></md-input>
                </md-field>
              </div>

              <div class="actions md-layout md-alignment-center-space-between">
                <a @click=" router('/register')">Register</a>
                <md-button class="md-raised md-primary" @click="auth">Log in</md-button>
              </div>

              <div class="loading-overlay" v-if="loading">
                <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
              </div>
            </md-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",

  mounted() {
    nav();
  },

  data() {
    return {
      loading: false,
      selectedCountry: null,
      selectedEmployee: null,
      countries: [
        "Bengaluru",
        "Mumbai",
        "Delhi",
        "Hyderabad",
        "Pune",
        "Jaipur",
        "Lucknow ",
        "Chennai "
      ],

      login: {
        email: "",
        password: "",
        gender: ""
      }
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/home");
      }, 1000);
    },
    router(x) {
      this.$router.push(x);
    }
  }
};
/* eslint-disable */
function nav() {
  let burger = document.getElementById("burger"),
    nav = document.getElementById("main-nav"),
    slowmo = document.getElementById("slowmo");

  burger.addEventListener("click", function(e) {
    this.classList.toggle("is-open");
    nav.classList.toggle("is-open");
  });

  /* Onload demo - dirty timeout */
  let clickEvent = new Event("click");

  window.addEventListener("load", function(e) {
    slowmo.dispatchEvent(clickEvent);
    burger.dispatchEvent(clickEvent);

    setTimeout(function() {
      burger.dispatchEvent(clickEvent);

      setTimeout(function() {
        slowmo.dispatchEvent(clickEvent);
      }, 3500);
    }, 5500);
  });
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap");
.grid-container {
  display: grid;
  grid-template-columns: 12vw 76vw 12vw;
  grid-template-rows: 60px calc(100vh - 60px);
}

.grid-item-1 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  // border: solid blue;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid-item-3 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  // border: solid blue;
}

.grid-item-2 {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  // border: solid blue;
  animation: transitionIn 0.4s;
}

.logo-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: dotted red;
  width: 120px;
  height: 100%;
  p {
    font-family: "Reem Kufi", sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */

    color: #ffffff;
  }
}
.button-parent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: dotted red;
  width: max-content;
  height: 100%;
}
.button:hover {
  cursor: pointer;
  background: #d1a609;
  //  border: 1.8px solid #000000;
  // box-sizing: border-box;
  border-radius: 4px;
}

.button {
  background: #ffc700;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 37px;
  width: max-content;
  padding-left: 10px;
  padding-right: 10px;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    color: #000000;
  }
}

.header-content {
  width: 100%;
  height: 12vh;
  // border: dotted red;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.location-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: dotted forestgreen;
  width: 240px;
  height: 100%;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */

    color: #000000;
  }
}

.content {
  background-color: #3c37ff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 100%;
  height: 550px;
  position: relative;
  // margin-top: 20px;
}
.aqi {
  position: absolute;
  width: 284px;
  height: 144px;
  top: 6%;
  left: 50%;
  transform: translate(-50%, 0%);

  background: #161389;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.aqi-inner {
  width: 100%;
  height: 100%;
  position: relative;
}
.aqi-val {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 76px;
  height: 37px;

  border-radius: 4px;
  p {
    margin: 0;
    padding: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;

    /* identical to box height */

    color: #121010;
  }
}
#status {
  margin: 0;
  padding: 0;

  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0%);
  font-family: Poppins;

  font-size: 24px;

  color: #ffffff;
}
#tag {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 6%;
  left: 10%;
  transform: translate(-50%, 0%);
  font-family: Poppins;

  font-size: 18px;

  color: #ffffff;
}
.params-parent {
  position: absolute;
  width: 31vw;
  height: 300px;
  // border: solid red;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0%);
  // display: flex;
  // align-items: flex-start;
  // justify-content: flex-start;
  // flex-wrap: wrap;
  //border: dotted red;
  ul {
    width: 100%;

    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%);
  }

  li {
    margin: 1rem;
  }
}

.abs-parent {
  height: 100%;
  width: 100%;
  position: relative;
  //border: dotted rebeccapurple;
}
.params {
  width: 202px;
  height: 105px;
  background: #161389;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  // margin-right: 10px;
  position: relative;
}
#title {
  margin: 0;
  padding: 0;

  position: absolute;
  top: 10%;
  left: 6%;
  transform: translate(0%, 0%);
  font-family: Poppins;

  font-size: 24px;

  color: #dadada;
}

#value {
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 1%;
  left: 6%;
  transform: translate(0%, 0%);
  font-family: Poppins;

  font-size: 34px;

  color: #ffffff;
}

#unit {
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 10%;
  right: 6%;
  transform: translate(0%, 0%);
  font-family: Poppins;

  font-size: 18px;

  color: #dadada;
}

@media only screen and (max-width: 1024px) {
  .grid-container {
    display: grid;
    grid-template-columns: 2vw 96vw 2vw;
    grid-template-rows: 60px calc(100vh - 60px);
  }

  .grid-item-1 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    // border: solid blue;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .grid-item-3 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    // border: solid blue;
  }

  .grid-item-2 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    // border: solid blue;
    animation: transitionIn 0.4s;
    height: max-content;
    padding-bottom: 10px;
  }

  .logo-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: dotted red;
    width: 106px;
    height: 100%;
    p {
      font-family: "Reem Kufi", sans-serif;
      text-align: center;

      font-size: 43px;

      /* identical to box height */

      color: #ffffff;
      margin: 0;
      margin-bottom: 10px;
      padding: 0;
    }
  }

  .location-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: dotted forestgreen;
    width: 195px;
    height: 100%;

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 54px;
      /* identical to box height */

      color: #000000;
    }
    img {
      width: 35px !important;
      height: 35px !important;
    }
  }
  .button {
    background: #ffc700;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 37px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 27px;
      /* identical to box height */

      color: #000000;
    }
  }

  .content {
    background-color: #3c37ff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 100%;
    height: 800px;
    position: relative;
    // margin-top: 20px;
  }

  .params-parent {
    position: absolute;
    width: 31vw;
    height: 300px;
    // border: solid red;
    top: 28%;
    left: 50%;
    transform: translate(-50%, 0%);
    // display: flex;
    // align-items: flex-start;
    // justify-content: flex-start;
    // flex-wrap: wrap;
    //border: dotted red;
    ul {
      width: 100%;

      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%);
    }

    li {
      margin: 1rem;
    }
  }

  .space {
    width: 100%;

    height: 10px;
  }

  .md-content {
    z-index: 1;
    padding: 30px;

    width: 100%;
    max-width: 300px;
    position: relative;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    border-radius: 4px;
  }

  .md-content-parent {
    z-index: 1;
    padding: 25px !important;

    width: 100%;
    max-width: 300px;
    position: relative;
    background-color: #3c37ff;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    border-radius: 4px;
  }
  //end
}

@media only screen and (max-width: 360px) {
  .button {
    background: #ffc700;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 37px;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 27px;
      /* identical to box height */

      color: #000000;
    }
  }
}

.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiPgogIDxwYXRoIGZpbGw9IiNmM2YzZjMiIHN0cm9rZT0iI2YzZjNmMyIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTQ0LTQ5Nmw2MjcgMTY3IDI1OSA2eiIvPgogIDxwYXRoIGZpbGw9IiNlM2UzZTMiIHN0cm9rZT0iI2UzZTNlMyIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNDczIDE1MjZsLTcxMCAxNDQgMTU0OS02NHoiLz4KICA8cGF0aCBmaWxsPSIjZWVlIiBzdHJva2U9IiNlZWUiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTEwMzAtMzIzaDU5MWwzODMtMTU5eiIvPgogIDxwYXRoIGZpbGw9IiNmMWYxZjEiIHN0cm9rZT0iI2YxZjFmMSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTQ0LTQ5Nmw4ODYgMTczIDk3NC0xNTl6Ii8+CiAgPHBhdGggZmlsbD0iI2UwZTBlMCIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0yMjMxIDQ5NWwtNjIgMjA1IDEwNCAzMTJ6Ii8+CiAgPHBhdGggZmlsbD0iI2U2ZTZlNiIgc3Ryb2tlPSIjZTZlNmU2IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xOTc4LTQybDI1MyA1MzcgNjEtNzQ1eiIvPgogIDxwYXRoIGZpbGw9IiNlZmVmZWYiIHN0cm9rZT0iI2VmZWZlZiIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTQ0LTQ5NmwxODYwIDE0IDUzNC05MnoiLz4KICA8cGF0aCBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNmNWY1ZjUiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTS01OTgtNTYxbDc0MiA2NSAyMzk0LTc4eiIvPgogIDxwYXRoIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMjI3MyAxMDEybC0xOSA0NDkgMjg0LTIwMzV6Ii8+CiAgPHBhdGggZmlsbD0iI2VhZWFlYSIgc3Ryb2tlPSIjZWFlYWVhIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0yMDA0LTQ4MmwyODggMjMyIDI0Ni0zMjR6Ii8+CiAgPHBhdGggZmlsbD0iI2U2ZTZlNiIgc3Ryb2tlPSIjZTZlNmU2IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0yMjkyLTI1MGwtNjEgNzQ1IDMwNy0xMDY5eiIvPgogIDxwYXRoIGZpbGw9IiNlM2UzZTMiIHN0cm9rZT0iI2UzZTNlMyIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMjIzMSA0OTVsNDIgNTE3IDI2NS0xNTg2eiIvPgogIDxwYXRoIGZpbGw9IiNkZGQiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTg0OSAxMDAzbC0xMDMgNDEyIDIyOSAxNDF6Ii8+CiAgPHBhdGggZmlsbD0iI2U0ZTRlNCIgc3Ryb2tlPSIjZTRlNGU0IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xOTc4LTQybC05MyA1MzAgMzQ2IDd6Ii8+CiAgPHBhdGggZmlsbD0iI2RjZGNkYyIgc3Ryb2tlPSIjZGNkY2RjIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xODQ5IDEwMDNsMTI2IDU1MyAyNzktOTV6Ii8+CiAgPHBhdGggZmlsbD0iI2RkZCIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xODQ5IDEwMDNsNDA1IDQ1OCAxOS00NDl6Ii8+CiAgPHBhdGggZmlsbD0iI2RmZGZkZiIgc3Ryb2tlPSIjZGZkZmRmIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0yMTY5IDcwMGwtMzIwIDMwMyA0MjQgOXoiLz4KICA8cGF0aCBmaWxsPSIjZWFlYWVhIiBzdHJva2U9IiNlYWVhZWEiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTIwMDQtNDgybC0yNiA0NDAgMzE0LTIwOHoiLz4KICA8cGF0aCBmaWxsPSIjZTJlMmUyIiBzdHJva2U9IiNlMmUyZTIiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE4ODUgNDg4bDI4NCAyMTIgNjItMjA1eiIvPgogIDxwYXRoIGZpbGw9IiNlMmUyZTIiIHN0cm9rZT0iI2UyZTJlMiIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTg4NSA0ODhsLTgzIDEzMyAzNjcgNzl6Ii8+CiAgPHBhdGggZmlsbD0iI2UxZTFlMSIgc3Ryb2tlPSIjZTFlMWUxIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xODAyIDYyMWw0NyAzODIgMzIwLTMwM3oiLz4KICA8cGF0aCBmaWxsPSIjZGZkZmRmIiBzdHJva2U9IiNkZmRmZGYiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE2ODUgMTEzOWw2MSAyNzYgMTAzLTQxMnoiLz4KICA8cGF0aCBmaWxsPSIjZTJlMmUyIiBzdHJva2U9IiNlMmUyZTIiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE4MDIgNjIxbC02MiA2OCAxMDkgMzE0eiIvPgogIDxwYXRoIGZpbGw9IiNkY2RjZGMiIHN0cm9rZT0iI2RjZGNkYyIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTc0NiAxNDE1bC00MzQgMTkxIDY2My01MHoiLz4KICA8cGF0aCBmaWxsPSIjZTdlN2U3IiBzdHJva2U9IiNlN2U3ZTciIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE2MTcgMTcybDI2OCAzMTYgOTMtNTMweiIvPgogIDxwYXRoIGZpbGw9IiNlYmViZWIiIHN0cm9rZT0iI2ViZWJlYiIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTYyMS0zMjNsMzU3IDI4MSAyNi00NDB6Ii8+CiAgPHBhdGggZmlsbD0iI2VhZWFlYSIgc3Ryb2tlPSIjZWFlYWVhIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xNjIxLTMyM2wtNCA0OTUgMzYxLTIxNHoiLz4KICA8cGF0aCBmaWxsPSIjZWJlYmViIiBzdHJva2U9IiNlYmViZWIiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE0MTAtNDlsMjA3IDIyMSA0LTQ5NXoiLz4KICA8cGF0aCBmaWxsPSIjZTVlNWU1IiBzdHJva2U9IiNlNWU1ZTUiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE2MTcgMTcybDE4NSA0NDkgODMtMTMzeiIvPgogIDxwYXRoIGZpbGw9IiNlNWU1ZTUiIHN0cm9rZT0iI2U1ZTVlNSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTYxNyAxNzJsMTIzIDUxNyA2Mi02OHoiLz4KICA8cGF0aCBmaWxsPSIjZTFlMWUxIiBzdHJva2U9IiNlMWUxZTEiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE3NDAgNjg5bC01NSA0NTAgMTY0LTEzNnoiLz4KICA8cGF0aCBmaWxsPSIjZTZlNmU2IiBzdHJva2U9IiNlNmU2ZTYiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE2MTcgMTcybC0zOTMgNDUxIDUxNiA2NnoiLz4KICA8cGF0aCBmaWxsPSIjZTJlMmUyIiBzdHJva2U9IiNlMmUyZTIiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTEyNDQgOTYybDQ0MSAxNzcgNTUtNDUweiIvPgogIDxwYXRoIGZpbGw9IiNlNWU1ZTUiIHN0cm9rZT0iI2U1ZTVlNSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTIyNCA2MjNsMjAgMzM5IDQ5Ni0yNzN6Ii8+CiAgPHBhdGggZmlsbD0iI2RmZGZkZiIgc3Ryb2tlPSIjZGZkZmRmIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xNjg1IDExMzlsLTM3MyA0NjcgNDM0LTE5MXoiLz4KICA8cGF0aCBmaWxsPSIjZTFlMWUxIiBzdHJva2U9IiNlMWUxZTEiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTEyNDQgOTYybDY4IDY0NCAzNzMtNDY3eiIvPgogIDxwYXRoIGZpbGw9IiNlYWVhZWEiIHN0cm9rZT0iI2VhZWFlYSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTQxMC00OWwtMzQyIDE3NSA1NDkgNDZ6Ii8+CiAgPHBhdGggZmlsbD0iI2U5ZTllOSIgc3Ryb2tlPSIjZTllOWU5IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xMDY4IDEyNmwxNTYgNDk3IDM5My00NTF6Ii8+CiAgPHBhdGggZmlsbD0iI2VkZWRlZCIgc3Ryb2tlPSIjZWRlZGVkIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xMDMwLTMyM2wzODAgMjc0IDIxMS0yNzR6Ii8+CiAgPHBhdGggZmlsbD0iI2VhZWFlYSIgc3Ryb2tlPSIjZWFlYWVhIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xMDY4IDEyNmwtNzkgODIgMjM1IDQxNXoiLz4KICA8cGF0aCBmaWxsPSIjZTRlNGU0IiBzdHJva2U9IiNlNGU0ZTQiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTkzNyA5NjJsLTE4NSA0MDkgNDkyLTQwOXoiLz4KICA8cGF0aCBmaWxsPSIjZTJlMmUyIiBzdHJva2U9IiNlMmUyZTIiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTEyNDQgOTYybC00OTIgNDA5IDU2MCAyMzV6Ii8+CiAgPHBhdGggZmlsbD0iI2VkZWRlZCIgc3Ryb2tlPSIjZWRlZGVkIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xMDMwLTMyM2wzOCA0NDkgMzQyLTE3NXoiLz4KICA8cGF0aCBmaWxsPSIjZTVlNWU1IiBzdHJva2U9IiNlNWU1ZTUiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTEyMjQgNjIzTDkzNyA5NjJoMzA3eiIvPgogIDxwYXRoIGZpbGw9IiNlMmUyZTIiIHN0cm9rZT0iI2UyZTJlMiIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNzUyIDEzNzFsLTI3OSAxNTUgODM5IDgweiIvPgogIDxwYXRoIGZpbGw9IiNlYWVhZWEiIHN0cm9rZT0iI2VhZWFlYSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNOTg5IDIwOEw3ODMgNDAxbDQ0MSAyMjJ6Ii8+CiAgPHBhdGggZmlsbD0iI2U3ZTdlNyIgc3Ryb2tlPSIjZTdlN2U3IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik03NDggNzg5bDE4OSAxNzMgMjg3LTMzOXoiLz4KICA8cGF0aCBmaWxsPSIjZTllOWU5IiBzdHJva2U9IiNlOWU5ZTkiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTc4MyA0MDFsLTM1IDM4OCA0NzYtMTY2eiIvPgogIDxwYXRoIGZpbGw9IiNmMGYwZjAiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNzcxLTMyOWwtMTIgNDU0IDI3MS00NDh6Ii8+CiAgPHBhdGggZmlsbD0iI2VlZSIgc3Ryb2tlPSIjZWVlIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xMDMwLTMyM0w3NTkgMTI1bDMwOSAxeiIvPgogIDxwYXRoIGZpbGw9IiNlY2VjZWMiIHN0cm9rZT0iI2VjZWNlYyIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNzU5IDEyNWwyMzAgODMgNzktODJ6Ii8+CiAgPHBhdGggZmlsbD0iI2U1ZTVlNSIgc3Ryb2tlPSIjZTVlNWU1IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik00ODEgMTEwNWwyNzEgMjY2IDE4NS00MDl6Ii8+CiAgPHBhdGggZmlsbD0iI2VjZWNlYyIgc3Ryb2tlPSIjZWNlY2VjIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik03NTkgMTI1bDI0IDI3NiAyMDYtMTkzeiIvPgogIDxwYXRoIGZpbGw9IiNlN2U3ZTciIHN0cm9rZT0iI2U3ZTdlNyIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNzQ4IDc4OWwtMjY3IDMxNiA0NTYtMTQzeiIvPgogIDxwYXRoIGZpbGw9IiNlOGU4ZTgiIHN0cm9rZT0iI2U4ZThlOCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNTE5IDc4MmwtMzggMzIzIDI2Ny0zMTZ6Ii8+CiAgPHBhdGggZmlsbD0iI2YxZjFmMSIgc3Ryb2tlPSIjZjFmMWYxIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0zMzUtMTQ4bDQyNCAyNzMgMTItNDU0eiIvPgogIDxwYXRoIGZpbGw9IiNmNGY0ZjQiIHN0cm9rZT0iI2Y0ZjRmNCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTcyLTQyOGwxNjMgMjgwIDQzNi0xODF6Ii8+CiAgPHBhdGggZmlsbD0iI2Y2ZjZmNiIgc3Ryb2tlPSIjZjZmNmY2IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0xNDQtNDk2bDI4IDY4IDU5OSA5OXoiLz4KICA8cGF0aCBmaWxsPSIjZWFlYWVhIiBzdHJva2U9IiNlYWVhZWEiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTUxOSA3ODJsMjI5IDcgMzUtMzg4eiIvPgogIDxwYXRoIGZpbGw9IiNlZWUiIHN0cm9rZT0iI2VlZSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNzU5IDEyNUwyMDIgMjU5bDU4MSAxNDJ6Ii8+CiAgPHBhdGggZmlsbD0iI2VjZWNlYyIgc3Ryb2tlPSIjZWNlY2VjIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0yMDIgMjU5bDMxNyA1MjMgMjY0LTM4MXoiLz4KICA8cGF0aCBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTMzNS0xNDhMMjAyIDI1OWw1NTctMTM0eiIvPgogIDxwYXRoIGZpbGw9IiNlNWU1ZTUiIHN0cm9rZT0iI2U1ZTVlNSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNNDgxIDExMDVsLTggNDIxIDI3OS0xNTV6Ii8+CiAgPHBhdGggZmlsbD0iI2U4ZThlOCIgc3Ryb2tlPSIjZThlOGU4IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tMTc5IDEwNDZsNjUyIDQ4MCA4LTQyMXoiLz4KICA8cGF0aCBmaWxsPSIjZWNlY2VjIiBzdHJva2U9IiNlY2VjZWMiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTS01IDU5M2wtMTc0IDQ1MyA2NjAgNTl6Ii8+CiAgPHBhdGggZmlsbD0iI2ViZWJlYiIgc3Ryb2tlPSIjZWJlYmViIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tNSA1OTNsNDg2IDUxMiAzOC0zMjN6Ii8+CiAgPHBhdGggZmlsbD0iI2VlZSIgc3Ryb2tlPSIjZWVlIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0yMDIgMjU5TC01IDU5M2w1MjQgMTg5eiIvPgogIDxwYXRoIGZpbGw9IiNlOGU4ZTgiIHN0cm9rZT0iI2U4ZThlOCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTE3OSAxMDQ2bC01OCA2MjQgNzEwLTE0NHoiLz4KICA8cGF0aCBmaWxsPSIjZjNmM2YzIiBzdHJva2U9IiNmM2YzZjMiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTS0xMDktMjNsMzExIDI4MiAxMzMtNDA3eiIvPgogIDxwYXRoIGZpbGw9IiNmNWY1ZjUiIHN0cm9rZT0iI2Y1ZjVmNSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNMTcyLTQyOEwtMTA5LTIzbDQ0NC0xMjV6Ii8+CiAgPHBhdGggZmlsbD0iI2VlZSIgc3Ryb2tlPSIjZWVlIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tMjQ1IDc3Mmw2NiAyNzRMLTUgNTkzeiIvPgogIDxwYXRoIGZpbGw9IiNmMWYxZjEiIHN0cm9rZT0iI2YxZjFmMSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTk2IDI5N2w5MSAyOTYgMjA3LTMzNHoiLz4KICA8cGF0aCBmaWxsPSIjZjNmM2YzIiBzdHJva2U9IiNmM2YzZjMiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTS0xMDktMjNsMTMgMzIwIDI5OC0zOHoiLz4KICA8cGF0aCBmaWxsPSIjZjdmN2Y3IiBzdHJva2U9IiNmN2Y3ZjciIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTTE0NC00OTZMLTEwOS0yM2wyODEtNDA1eiIvPgogIDxwYXRoIGZpbGw9IiNmOWY5ZjkiIHN0cm9rZT0iI2Y5ZjlmOSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTU5OC01NjFsNDg5IDUzOCAyNTMtNDczeiIvPgogIDxwYXRoIGZpbGw9IiNlYmViZWIiIHN0cm9rZT0iI2ViZWJlYiIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTU1NCAxMzkybDMxNyAyNzggNTgtNjI0eiIvPgogIDxwYXRoIGZpbGw9IiNmNGY0ZjQiIHN0cm9rZT0iI2Y0ZjRmNCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTEwOS0yM2wtMjQ4IDE1MSAyNjEgMTY5eiIvPgogIDxwYXRoIGZpbGw9IiNmMGYwZjAiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTk2IDI5N2wtMTQ5IDQ3NUwtNSA1OTN6Ii8+CiAgPHBhdGggZmlsbD0iI2VkZWRlZCIgc3Ryb2tlPSIjZWRlZGVkIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tNTUwIDExODFsLTQgMjExIDM3NS0zNDZ6Ii8+CiAgPHBhdGggZmlsbD0iI2Y4ZjhmOCIgc3Ryb2tlPSIjZjhmOGY4IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tNTk4LTU2MWwyNDEgNjg5IDI0OC0xNTF6Ii8+CiAgPHBhdGggZmlsbD0iI2YyZjJmMiIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tNDM1IDIwN2wxOTAgNTY1IDE0OS00NzV6Ii8+CiAgPHBhdGggZmlsbD0iI2Y0ZjRmNCIgc3Ryb2tlPSIjZjRmNGY0IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tMzU3IDEyOGwtNzggNzkgMzM5IDkweiIvPgogIDxwYXRoIGZpbGw9IiNlZWUiIHN0cm9rZT0iI2VlZSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTI0NSA3NzJsLTMwNSA0MDkgMzcxLTEzNXoiLz4KICA8cGF0aCBmaWxsPSIjZjFmMWYxIiBzdHJva2U9IiNmMWYxZjEiIHN0cm9rZS13aWR0aD0iMS41MSIgZD0iTS00MzUgMjA3bC0xMTUgOTc0IDMwNS00MDl6Ii8+CiAgPHBhdGggZmlsbD0iI2Y4ZjhmOCIgc3Ryb2tlPSIjZjhmOGY4IiBzdHJva2Utd2lkdGg9IjEuNTEiIGQ9Ik0tNTk4LTU2MWwxNjMgNzY4IDc4LTc5eiIvPgogIDxwYXRoIGZpbGw9IiNmNWY1ZjUiIHN0cm9rZT0iI2Y1ZjVmNSIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTU5OC01NjFsNDggMTc0MiAxMTUtOTc0eiIvPgogIDxwYXRoIGZpbGw9IiNmMmYyZjIiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIxLjUxIiBkPSJNLTU5OC01NjFsNDQgMTk1MyA0LTIxMXoiLz4KPC9zdmc+Cg==);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 30px;

    width: 100%;
    max-width: 500px;
    position: relative;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    border-radius: 4px;
  }

  .md-content-parent {
    z-index: 1;
    padding: 35px;

    width: 100%;
    max-width: 500px;
    position: relative;
    background-color: #3c37ff;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    border-radius: 4px;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.hide-for-dekstop {
  display: none;
}

@media only screen and (max-width: 1024px) {
  .hide-for-dekstop {
    display: block;
  }
  .hide-for-mobile {
    display: none !important;
  }
}
</style>
