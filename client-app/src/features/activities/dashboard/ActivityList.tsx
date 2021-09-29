import React from "react";
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemMeta, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props){
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity =>(
                    <Item key={activity.id}> 
                        <ItemContent>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <ItemMeta>{activity.date}</ItemMeta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button onClick={()=> selectActivity(activity.id)} floated='right' content='View' color='blue'/>
                                <Button onClick={()=> deleteActivity(activity.id)} floated='right' content='Delete' color='red'/>
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}