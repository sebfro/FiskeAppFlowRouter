/**
 * Created by sebas on 02.05.2017.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Reports = new Mongo.Collection('reports');

if(Meteor.isServer){
    //This code only runs on server
    //Only publish reports that belongs to the current user
    Meteor.publish('reports', function reportsPublication() {
        return Reports.find({
            $or: [
                { private: { $ne: true } },
                { owner: this.userId },
            ],
        });
    });
}

Meteor.methods({
    'reports.insert'(titel, kommentar){
        check(titel, String);
        check(kommentar, String);

        //Make sure user is logged in before inserting a task
        if (!this.userId()){
            throw new Meteor.Error('not-authorized');
        }

        Reports.insert({
            titel,
            kommentar,
            createdAt: new Date(),
            owner: this.userId(),
            username: Meteor.users.findOne(this.userId).username,
        });
    },
});