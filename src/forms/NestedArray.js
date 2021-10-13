import React, { Component } from "react";
const data = [
  {
    name: "Jude",
    position: "Developer",
    experiences: [
      {
        id: 0,
        job: "React UI Developer",
        period: "2017-2018",
        description:
          "I love Creating beautiful Smart UI with React js and styled components",
      },
      {
        id: 1,
        job: "React/ Redux UI Developer",
        period: "2017-2018",
        description:
          "I love Creating beautiful Smart UI with React js and styled components",
      },
    ],
  },
];

class M2 extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.setState({ data });
    console.log(data);
  }
  render() {
    const { data } = this.state;
    const resume = data.map((dataIn) => {
      return (
        <div key={dataIn.name}>
          {dataIn.name}
          <ul>
            {dataIn.experiences.map((experience) => {
              <li key={experience.id}>{experience.job}</li>;
            })}
          </ul>

          {dataIn.position}
        </div>
      );
    });
    return (
      <div>
        <React.Fragment>{resume}</React.Fragment>
      </div>
    );
  }
}

export default M2;
