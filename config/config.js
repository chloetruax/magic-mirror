/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_bar"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_right",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Bellevue, NE",
				locationID: "5063805",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "f91a9665c7e0eca4ba2197c06fc9e298"
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Bellevue, NE",
				locationID: "5063805",  //ID from https://openweathermap.org/city
				appid: "f91a9665c7e0eca4ba2197c06fc9e298"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Washington Post",
						url: "http://feeds.washingtonpost.com/rss/national"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		 {
            module: 'MMM-GoogleMapsTraffic',
            position: 'bottom_right',
            config: {
                key: 'AIzaSyChpdKmrc5lGIqVGOPvrqticTqKzmQseO8',
                lat: 41.160323,
                lng: -95.942736,
                height: '300px',
                width: '300px',
                styledMapType: "transparent",
                disableDefaultUI: true,
                backgroundColor: 'hsla(0, 0%, 0%, 0)',
                markers: [
                    {
                        lat: 41.160323,
                        lng: -95.942736,
                        fillColor: '#9966ff'
                    },
                ],
            },
        },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
