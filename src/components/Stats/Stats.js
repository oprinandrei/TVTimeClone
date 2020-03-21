import React, {Component} from 'react';
import Serial from './Serial/Serial';

class Stats extends Component {
  state = {
    "tvSeries": [
      {
        "uuid": "7d0e9c9c-6ae4-11ea-bc55-0242ac130003",
        "name": "Westworld",
        "logo": "",
        "seasons": [
          {
            "seasonName": "Season 1",
            "episode": [
              {
                "episodeName": "The Original",
                "episodeDescription": "The park staff begin to notice strange behavior from the hosts; A mysterious Man in Black roams the park, wreaking havoc.",
                "episodeDuration": "1:08"
              },
              {
                "episodeName": "Chestnut",
                "episodeDescription": "Two guests arrive at the park with different expectations; Maeve's emotions are tweaked; The Man in Black seeks help from a condemned man.",
                "episodeDuration": "1:04"
              },
              {
                "episodeName": "The Stray",
                "episodeDescription": "Elsie and Stubbs search for a missing host; Teddy gets a new backstory; Bernard investigates the origins of madness and hallucinations within the hosts.",
                "episodeDuration": "0:59"
              }
            ]
          },
          {
            "seasonName": "Season 2",
            "episode": [
              {
                "episodeName": "Journey into Night",
                "episodeDescription": "The hosts revolt against the guests while searching for a new purpose; Maeve sets out to find her daughter with some unexpected help.",
                "episodeDuration": "1:15"
              },
              {
                "episodeName": "Reunion",
                "episodeDescription": "Dolores remembers she's been to the outside world; William makes a bold business venture.",
                "episodeDuration": "1:09"
              }
            ]
          }
        ]
      },
      {
        "uuid": "122cce5c-6ae5-11ea-bc55-0242ac130003",
        "name": "The big bang theory",
        "logo": "",
        "seasons": [
          {
            "seasonName": "Season 1",
            "episode": [
              {
                "episodeName": "Pilot",
                "episodeDescription": "A pair of socially awkward theoretical physicists meet their new neighbor Penny, who is their polar opposite.",
                "episodeDuration": "0:32"
              },
              {
                "episodeName": "The Big Bran Hypothesis",
                "episodeDescription": "Penny is furious with Leonard and Sheldon when they sneak into her apartment and clean it while she is sleeping.",
                "episodeDuration": "0:29"
              },
              {
                "episodeName": "The Fuzzy Boots Corollary",
                "episodeDescription": "Leonard gets upset when he discovers that Penny is seeing a new guy, so he tries to trick her into going on a date with him.",
                "episodeDuration": "0:28"
              }
            ]
          },
          {
            "seasonName": "Season 2",
            "episode": [
              {
                "episodeName": "The Bad Fish Paradigm",
                "episodeDescription": "Leonard becomes concerned when his date with Penny ends abruptly and she starts blowing him off. When told the truth, Sheldon would rather move out than keep Penny's reasons a secret from Leonard.",
                "episodeDuration": "0:31"
              },
              {
                "episodeName": "The Codpiece Topology",
                "episodeDescription": "Sheldon is annoyed when Leonard turns to Leslie for comfort after seeing Penny with another guy.",
                "episodeDuration": "0:27"
              }
            ]
          },
          {
            "seasonName": "Season 3",
            "episode": [
              {
                "episodeName": "The Electric Can Opener Fluctuation",
                "episodeDescription": "After returning from the North Pole, a conflict among the guys sends Sheldon back to Texas and interferes with Leonard's reunion with Penny.",
                "episodeDuration": "0:25"
              },
              {
                "episodeName": "The Jiminy Conjecture",
                "episodeDescription": "Leonard and Penny's first night together goes awkwardly. Sheldon and Howard wager on the species of a cricket.",
                "episodeDuration": "0:30"
              },
              {
                "episodeName": "The Gothowitz Deviation",
                "episodeDescription": "Sheldon attempts to covertly alter Penny's habits, while Howard and Raj try their luck meeting women at a Goth-style club.",
                "episodeDuration": "0:28"
              }
            ]
          }
        ]
      }
    ],
    toExpand : false
  }

  ExpandHandler = () => {
    const expand = this.state.toExpand
    this.setState ({
      toExpand : !expand
    })
  }

  render() {
    return (
      <div className="Container">
        {this.state.tvSeries.map((serial) => {
          return <Serial serial={serial} expand={this.state.toExpand} click={() => this.ExpandHandler()} key={serial.uuid}/>
        })}
      </div>
    );
  }
}

export default Stats;