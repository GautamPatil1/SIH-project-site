

var config = {
    style: 'mapbox://styles/gautampatil/cm1ljhy0i00j301r2ab9g8dit',
    accessToken: 'pk.eyJ1IjoiZ2F1dGFtcGF0aWwiLCJhIjoiY2xjeGgzcWx5MGNxbTNxcWxnNjg4bGVuayJ9.pI9NjSciVuBvCfWDddtAOg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'SIH Hackathon Project',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By Team Fusion',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'ISRO API',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.thehansindia.com%2Fh-upload%2F2020%2F09%2F11%2F997825-isro.jpg&f=1&nofb=1&ipt=28e3fde00bd23d677ffc8490fab626fb4df7d7b856758e216fe515eba8e664ea&ipo=images',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [73.9817707156725,18.573582431077778], 
                zoom: 12.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            style: 'mapbox://styles/gautampatil/cm1ljhy0i00j301r2ab9g8dit',
            hidden: false,
            title: 'Road Detection Algorithm',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.it-jim.com%2Fwp-content%2Fuploads%2F2016%2F02%2FRoad-Detection-illustation.jpg&f=1&nofb=1&ipt=642d70142777dff7fc0fbee0bd492d983ee944fe5538c1f1264625f3f5f54f39&ipo=images',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [73.9817707156725,18.573582431077778], 
                zoom: 16.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        
    ]
};
