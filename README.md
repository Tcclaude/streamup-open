
[![Build Status](https://travis-ci.org/richard457/streamup-open.svg?branch=master)](https://travis-ci.org/richard457/streamup-open)
[ ![Codeship Status for richard457/streamup-open](https://app.codeship.com/projects/fd358400-378b-0134-16e8-2691568e5d59/status?branch=master)](https://app.codeship.com/projects/165810)

StreamupBoxDeskTopApp (hacking version) 

StreamupBoxDeskTopApp (hacking Version)  App Based on StreamUpBox API found here[Link](https://github.com/richard457/StreamBoxUpAPi) is an Open-Source project to support StreamUpBox for desktop Mac, Windows, and Linux. <br>
It's built with atom , Node.js, Angular.js, and it uses the StreamUpBox API.

![alt tag](https://raw.githubusercontent.com/richard457/streamup-open/master/app.png)

## Features

- No need to install
- Native media keyboard shortcuts
- Search for new public available Files
- Request a files From your friend if not available in public access
- Easy navigation
- List any files of any type
- Share any File to anyone
- Protect your Files by password on Share and add Expiration date
- Fun with Listening to songs from your box, Likes, Tracks, Following or Playlists
- Like songs or Any Audio and save to your liked playlist
- Full playlist feature
- Follow/Unfollow users

And much more!
## Reasons to contribute

- You will learn new things
- You will have a typical reason to be the First to  beat dropBox



```javascript
{
    "github": {
        "client_id": "yourclientID",
        "client_secret": "yoursecretkey",
        "scopes": [
            "user:email",
            "notifications"
        ]
    }
}
```

and place this file inside the "app" folder.Dont use this in production as for production you should have a safe server side URI and not have your secret key in the app folder.  

When running it authenticates the user and goes to a page showing the username received from the authentication oauth workflow.

## Run the example

```bash
$ npm install
$ npm run build
$ npm run watch
$ npm run electron
```

## Packaging

The app has support for packaging using 'electron-packager'

```bash
$ npm run package
```

Will run the package for OSX. You can also provide additional options to the package command such as

*  --name : The package name
*  --all : Will packaget the application to all the platforms
*  --arch : Arches to be provided
*  --icon : The icon for the app

## License

## How to contribute

First, building, testing, and reporting bugs is highly appreciated. Please include console's output and steps to reproduce the problem in your bug report if possible.

If you want to develop, you can look at the issues, especially the bugs and then fix them.
Here's a [list of issues](https://github.com/richard457/streamup-open/issues?state=open).

Please follow the [contribution guidelines](https://github.com/richard457/streamup-open/blob/master/CONTRIBUTING.md).

## Development

We use [Waffle.io](https://waffle.io/richard457/streamup-open) as our project management tool, you can check what's going on here: [StreamUpBox App status](https://waffle.io/richard457/streamup-open)


## see our working graph
[![Throughput Graph](https://graphs.waffle.io/richard457/streamup-open/throughput.svg)](https://waffle.io/richard457/streamup-open/metrics/throughput)


atom don't support mp3 and h264 in video and audio tag by default because of patented media formats.
but here's how you can [support audio](https://github.com/Soundnode/soundnode-app/wiki/Support-mp3-and-h264-in-video-and-audio-tag) and develop.
<br>
See the [Development page](https://github.com/richard457/streamup-open/wiki/Development)

## Supported Platforms

- Linux
- Windows
- Mac


## Author

- [Muragijimana Richard](https://github.com/richard457)

## Contributors

Thanks to the friends from [Youthoughts](http://Youthoughts.com/) for a lot help provided and encouragement.

and Thanks to all [contributors](https://github.com/richard457/streamup-open/graphs/contributors) that are helping or helped to make StreamUpBox better.

## License


[MIT]

[Webpack]: http://webpack.github.io
[MIT]: http://markdalgleish.mit-license.org
[angular]: http://angular.io
[electron]: http://electron.atom.io/
[ngrx]: https://github.com/ngrx/store
[material2]: https://github.com/angular/material2
[electron-packager]: https://github.com/electron-userland/electron-packager
