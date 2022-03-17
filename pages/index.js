import React, {Component} from 'react';
import factory from '../ethereum/factory';
import {Card} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import  Layout  from '../components/Layout';
import { Link } from '../routes';



// rendering any  component  is computationally expensive process
class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return {
      campaigns
    };
  }
  //
  // async componentDidMount(){
  //
  //   console.log(campaigns);
  // }
  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description:(
          <Link route = {`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items = {
      items
    }
    />;
  }

  render() {
    return(
    <Layout>
    <div>
       <h3>Open campaigns</h3>
       <Link route="/campaigns/new">
       <a>
        <Button
        floated="right"
        content = "Create Campaign"
        icon = "add circle"
        secondary={true}
        />
        </a>
        </Link>
         {this.renderCampaigns()}
      < /div>
      </Layout>
    );
  }
}

export default CampaignIndex;
