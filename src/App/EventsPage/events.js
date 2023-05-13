import React, { Component } from "react";
import FooterSection from "../HomePage/FooterSection/footer";
import HackathonSection from "./hackathonsSection/hackathon";
import HeaderSection from "./headerSection/header";
import OrganiseEventSection from "./organiseEventSection/organiseEvent";
import RecentEventsSection from "./recentEventsSection/recentEvents";
import RecentEventsSection2 from "./recentEventsSection_2/recentEvents";
import RecentEventsSection3 from "./recentEventsSection_3/recentEvents";
import RecentEventsSection4 from "./recentEventsSection_4/recentEvents";
import UpcomingEvent from "./upcomingEventsSection/upcomingEvents";


class EventsPage extends Component{
    render(){
        return(
            <div>
                <HeaderSection />
                <RecentEventsSection4 />
                <RecentEventsSection2 />
                <RecentEventsSection />
                <UpcomingEvent />
                <RecentEventsSection3 />
                <HackathonSection />
                <OrganiseEventSection />
                <FooterSection />
            </div>
        )
    }
}

export default EventsPage