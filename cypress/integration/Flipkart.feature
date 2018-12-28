Feature: The Flipkart
	I want to open Flipkart Website

Scenario: Opening the Flipkart Website and Test Title of Page
Given I open Flipkart page
Then I see "Online Shopping Site" in the title

Scenario: Login to Flipkart site
 Enter username and password
  I see site logged in

Scenario: Go to 24*7 Customer Care and Go to Orders in it
Given Click on 24*7 Care and click on order category
Then I see total "28" questions related to order

Scenario: Go to Electronics and Select Mac
Given I open Flipkart page
Given Select Mac in Mobile Electronics
