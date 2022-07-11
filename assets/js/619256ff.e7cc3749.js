"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"dev-guide-android-sdk",title:"Android SDK"},s=void 0,d={unversionedId:"dev-guide/dev-guide-android-sdk",id:"dev-guide/dev-guide-android-sdk",title:"Android SDK",description:"The Jitsi Meet Android SDK provides the same user experience as the Jitsi Meet app,",source:"@site/docs/dev-guide/android-sdk.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-android-sdk",permalink:"/handbook/docs/dev-guide/dev-guide-android-sdk",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/android-sdk.md",tags:[],version:"current",lastUpdatedAt:1657523101,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"dev-guide-android-sdk",title:"Android SDK"},sidebar:"docs",previous:{title:"Feature flags",permalink:"/handbook/docs/dev-guide/mobile-feature-flags"},next:{title:"iOS SDK",permalink:"/handbook/docs/dev-guide/dev-guide-ios-sdk"}},p={},c=[{value:"Sample applications using the SDK",id:"sample-applications-using-the-sdk",level:2},{value:"Build your own, or use a pre-build SDK artifacts/binaries",id:"build-your-own-or-use-a-pre-build-sdk-artifactsbinaries",level:2},{value:"Use pre-build SDK artifacts/binaries",id:"use-pre-build-sdk-artifactsbinaries",level:3},{value:"Build and use your own SDK artifacts/binaries",id:"build-and-use-your-own-sdk-artifactsbinaries",level:3},{value:"Using the API",id:"using-the-api",level:2},{value:"JitsiMeetActivity",id:"jitsimeetactivity",level:3},{value:"JitsiMeetView",id:"jitsimeetview",level:3},{value:"join(options)",id:"joinoptions",level:4},{value:"leave()",id:"leave",level:4},{value:"dispose()",id:"dispose",level:4},{value:"getListener()",id:"getlistener",level:4},{value:"setListener(listener)",id:"setlistenerlistener",level:4},{value:"JitsiMeetConferenceOptions",id:"jitsimeetconferenceoptions",level:3},{value:"JitsiMeetActivityDelegate",id:"jitsimeetactivitydelegate",level:3},{value:"onActivityResult(...)",id:"onactivityresult",level:4},{value:"onBackPressed()",id:"onbackpressed",level:4},{value:"onHostDestroy(...)",id:"onhostdestroy",level:4},{value:"onHostResume(...)",id:"onhostresume",level:4},{value:"onHostStop(...)",id:"onhoststop",level:4},{value:"onNewIntent(...)",id:"onnewintent",level:4},{value:"onRequestPermissionsResult(...)",id:"onrequestpermissionsresult",level:4},{value:"onUserLeaveHint()",id:"onuserleavehint",level:4},{value:"JitsiMeetViewListener (deprecated - use Listening for broadcasted events instead)",id:"jitsimeetviewlistener-deprecated---use-listening-for-broadcasted-events-instead",level:4},{value:"onConferenceJoined",id:"onconferencejoined",level:4},{value:"onConferenceTerminated",id:"onconferenceterminated",level:4},{value:"onConferenceWillJoin",id:"onconferencewilljoin",level:4},{value:"Listening for broadcasted events",id:"listening-for-broadcasted-events",level:3},{value:"Supported events",id:"supported-events",level:4},{value:"CONFERENCE_JOINED",id:"conference_joined",level:5},{value:"CONFERENCE_TERMINATED",id:"conference_terminated",level:5},{value:"CONFERENCE_WILL_JOIN",id:"conference_will_join",level:5},{value:"AUDIO_MUTED_CHANGED",id:"audio_muted_changed",level:5},{value:"PARTICIPANT_JOINED",id:"participant_joined",level:5},{value:"PARTICIPANT_LEFT",id:"participant_left",level:5},{value:"ENDPOINT_TEXT_MESSAGE_RECEIVED",id:"endpoint_text_message_received",level:5},{value:"SCREEN_SHARE_TOGGLED",id:"screen_share_toggled",level:4},{value:"PARTICIPANTS_INFO_RETRIEVED",id:"participants_info_retrieved",level:5},{value:"CHAT_MESSAGE_RECEIVED",id:"chat_message_received",level:5},{value:"CHAT_TOGGLED",id:"chat_toggled",level:5},{value:"VIDEO_MUTED_CHANGED",id:"video_muted_changed",level:5},{value:"READY_TO_CLOSE",id:"ready_to_close",level:5},{value:"Broadcasting Actions",id:"broadcasting-actions",level:3},{value:"Supported actions",id:"supported-actions",level:4},{value:"SET_AUDIO_MUTED",id:"set_audio_muted",level:5},{value:"SET_VIDEO_MUTED",id:"set_video_muted",level:5},{value:"HANG_UP",id:"hang_up",level:5},{value:"SEND_ENDPOINT_TEXT_MESSAGE",id:"send_endpoint_text_message",level:5},{value:"TOGGLE_SCREEN_SHARE",id:"toggle_screen_share",level:5},{value:"RETRIEVE_PARTICIPANTS_INFO",id:"retrieve_participants_info",level:5},{value:"OPEN_CHAT",id:"open_chat",level:5},{value:"CLOSE_CHAT",id:"close_chat",level:5},{value:"SEND_CHAT_MESSAGE",id:"send_chat_message",level:5},{value:"ProGuard rules",id:"proguard-rules",level:2},{value:"Picture-in-Picture",id:"picture-in-picture",level:2},{value:"Dropbox integration",id:"dropbox-integration",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Jitsi Meet Android SDK provides the same user experience as the Jitsi Meet app,\nin a customizable way which you can embed in your apps."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Android 6.0 (API level 23) or higher is required."))),(0,o.kt)("h2",{id:"sample-applications-using-the-sdk"},"Sample applications using the SDK"),(0,o.kt)("p",null,"If you want to see how easy integrating the Jitsi Meet SDK into a native application is, take a look at the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-sdk-samples"},"sample applications repository"),"."),(0,o.kt)("h2",{id:"build-your-own-or-use-a-pre-build-sdk-artifactsbinaries"},"Build your own, or use a pre-build SDK artifacts/binaries"),(0,o.kt)("p",null,"Jitsi conveniently provides a pre-build SDK artifacts/binaries in its Maven repository. When you do not require any\nmodification to the SDK itself or any of its dependencies, it's suggested to use the pre-build SDK. This avoids the\ncomplexity of building and installing your own SDK artifacts/binaries."),(0,o.kt)("h3",{id:"use-pre-build-sdk-artifactsbinaries"},"Use pre-build SDK artifacts/binaries"),(0,o.kt)("p",null,"In your project, add the Maven repository\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/jitsi/jitsi-maven-repository/raw/master/releases")," and the\ndependency ",(0,o.kt)("inlineCode",{parentName:"p"},"org.jitsi.react:jitsi-meet-sdk")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," files."),(0,o.kt)("p",null,"The repository typically goes into the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file in the root of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle"',title:'"build.gradle"'},"allprojects {\n    repositories {\n        maven {\n            url \"https://github.com/jitsi/jitsi-maven-repository/raw/master/releases\"\n        }\n        google()\n        mavenCentral()\n        maven { url 'https://www.jitpack.io' }\n    }\n}\n")),(0,o.kt)("p",null,"Dependency definitions belong in the individual module ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},"dependencies {\n    // (other dependencies)\n    implementation ('org.jitsi.react:jitsi-meet-sdk:+') { transitive = true }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you pin your dependency by checking the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-release-notes/blob/master/CHANGELOG-MOBILE-SDKS.md"},"releases page"),"."))),(0,o.kt)("h3",{id:"build-and-use-your-own-sdk-artifactsbinaries"},"Build and use your own SDK artifacts/binaries"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show building instructions"),(0,o.kt)("p",null,"Start by making sure that your development environment ",(0,o.kt)("a",{parentName:"p",href:"/handbook/docs/dev-guide/dev-guide-mobile"},"is set up correctly"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"A Note on Dependencies")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Apart from the SDK, Jitsi also publishes a binary Maven artifact for some of the SDK dependencies (that are not otherwise publicly available) to the Jitsi Maven repository. When you're planning to use a SDK that is built from source, you'll likely use a version of the source code that is newer (or at least ",(0,o.kt)("em",{parentName:"p"},"different"),") than the version of the source that was used to create the binary SDK artifact. As a consequence, the dependencies that your project will need, might also be different from those that are published in the Jitsi Maven repository. This might lead to build problems, caused by dependencies that are unavailable."))),(0,o.kt)("p",null,"If you want to use a SDK that is built from source, you will likely benefit from composing a local Maven repository that contains these dependencies. The text below describes how you create a repository that includes both the SDK as well as these dependencies. For illustration purposes, we'll define the location of this local Maven repository as ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/repo")),(0,o.kt)("p",null,"In source code form, the Android SDK dependencies are locked/pinned by ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," of the Jitsi Meet project. To obtain the data, execute NPM in the jitsi-meet project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\n")),(0,o.kt)("p",null,"This will pull in the dependencies in either binary format, or in source code format, somewhere under /node_modules/"),(0,o.kt)("p",null,"Third-party React Native ",(0,o.kt)("em",{parentName:"p"},"modules"),", which Jitsi Meet SDK for Android depends on, are download by NPM in source code\nor binary form. These need to be assembled into Maven artifacts, and then published to your local Maven repository.\nA script is provided to facilitate this. From the root of the jitsi-meet project repository, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./android/scripts/release-sdk.sh /tmp/repo\n")),(0,o.kt)("p",null,"This will build and publish the SDK, and all of its dependencies to the specified Maven repository (",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/repo"),") in\nthis example."),(0,o.kt)("p",null,"You're now ready to use the artifacts. In ",(0,o.kt)("em",{parentName:"p"},"your")," project, add the Maven repository that you used above (",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/repo"),") into your top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"allprojects {\n    repositories {\n        maven { url \"file:/tmp/repo\" }\n        google()\n        mavenCentral()\n        maven { url 'https://www.jitpack.io' }\n    }\n}\n")),(0,o.kt)("p",null,"You can use your local repository to replace the Jitsi repository (",(0,o.kt)("inlineCode",{parentName:"p"},'maven { url "https://github.com/jitsi/jitsi-maven-repository/raw/master/releases" }'),") when you published ",(0,o.kt)("em",{parentName:"p"},"all")," subprojects. If you didn't do that, you'll have to add both repositories. Make sure your local repository is listed first!"),(0,o.kt)("p",null,"Then, define the dependency ",(0,o.kt)("inlineCode",{parentName:"p"},"org.jitsi.react:jitsi-meet-sdk")," into the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file of your module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"implementation ('org.jitsi.react:jitsi-meet-sdk:+') { transitive = true }\n")),(0,o.kt)("p",null,"Note that there should not be a need to explicitly add the other dependencies, as they will be pulled in as transitive\ndependencies of ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsi-meet-sdk"),".")),(0,o.kt)("h2",{id:"using-the-api"},"Using the API"),(0,o.kt)("p",null,"Jitsi Meet SDK is an Android library which embodies the whole Jitsi Meet\nexperience and makes it reusable by third-party apps."),(0,o.kt)("p",null,"First, add Java 1.8 compatibility support to your project by adding the\nfollowing lines into your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compileOptions {\n    sourceCompatibility JavaVersion.VERSION_1_8\n    targetCompatibility JavaVersion.VERSION_1_8\n}\n")),(0,o.kt)("p",null,"To get started, extends your ",(0,o.kt)("inlineCode",{parentName:"p"},"android.app.Activity")," from\n",(0,o.kt)("inlineCode",{parentName:"p"},"org.jitsi.meet.sdk.JitsiMeetActivity"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package org.jitsi.example;\n\nimport org.jitsi.meet.sdk.JitsiMeetActivity;\n\npublic class MainActivity extends JitsiMeetActivity {\n}\n")),(0,o.kt)("p",null,"Alternatively, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.jitsi.meet.sdk.JitsiMeetView")," class which\nextends ",(0,o.kt)("inlineCode",{parentName:"p"},"android.view.View"),"."),(0,o.kt)("p",null,"Note that this should only be needed when ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetActivity")," cannot be used for\nsome reason. Extending ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetView")," requires manual wiring of the view to\nthe activity, using a lot of boilerplate code. Using the Activity instead of the\nView is strongly recommended."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package org.jitsi.example;\n\nimport android.os.Bundle;\nimport android.support.v4.app.FragmentActivity;\n\nimport org.jitsi.meet.sdk.JitsiMeetView;\nimport org.jitsi.meet.sdk.ReactActivityLifecycleCallbacks;\n\n// Example\n//\npublic class MainActivity extends FragmentActivity implements JitsiMeetActivityInterface {\n    private JitsiMeetView view;\n\n    @Override\n    protected void onActivityResult(\n            int requestCode,\n            int resultCode,\n            Intent data) {\n        JitsiMeetActivityDelegate.onActivityResult(\n                this, requestCode, resultCode, data);\n    }\n\n    @Override\n    public void onBackPressed() {\n        JitsiMeetActivityDelegate.onBackPressed();\n    }\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n\n        view = new JitsiMeetView(this);\n        JitsiMeetConferenceOptions options = new JitsiMeetConferenceOptions.Builder()\n            .setRoom("https://meet.jit.si/test123")\n            .build();\n        view.join(options);\n\n        setContentView(view);\n    }\n\n    @Override\n    protected void onDestroy() {\n        super.onDestroy();\n\n        view.dispose();\n        view = null;\n\n        JitsiMeetActivityDelegate.onHostDestroy(this);\n    }\n\n    @Override\n    public void onNewIntent(Intent intent) {\n        JitsiMeetActivityDelegate.onNewIntent(intent);\n    }\n\n    @Override\n    public void onRequestPermissionsResult(\n            final int requestCode,\n            final String[] permissions,\n            final int[] grantResults) {\n        JitsiMeetActivityDelegate.onRequestPermissionsResult(requestCode, permissions, grantResults);\n    }\n\n    @Override\n    protected void onResume() {\n        super.onResume();\n\n        JitsiMeetActivityDelegate.onHostResume(this);\n    }\n\n    @Override\n    protected void onStop() {\n        super.onStop();\n\n        JitsiMeetActivityDelegate.onHostPause(this);\n    }\n}\n'))),(0,o.kt)("h3",{id:"jitsimeetactivity"},"JitsiMeetActivity"),(0,o.kt)("p",null,"This class encapsulates a high level API in the form of an Android ",(0,o.kt)("inlineCode",{parentName:"p"},"FragmentActivity"),"\nwhich displays a single ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetView"),". You can pass a URL as a ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTION_VIEW"),"\non the Intent when starting it and it will join the conference, and will be\nautomatically terminated (finish() will be called on the activity) when the\nconference ends or fails."),(0,o.kt)("h3",{id:"jitsimeetview"},"JitsiMeetView"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetView")," class is the core of Jitsi Meet SDK. It's designed to\ndisplay a Jitsi Meet conference (or a welcome page)."),(0,o.kt)("h4",{id:"joinoptions"},"join(options)"),(0,o.kt)("p",null,"Joins the conference specified by the given ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetConferenceOptions"),"."),(0,o.kt)("h4",{id:"leave"},"leave()"),(0,o.kt)("p",null,"Leaves the currently active conference. If the welcome page is enabled it will\ngo back to it, otherwise a black window will be shown."),(0,o.kt)("h4",{id:"dispose"},"dispose()"),(0,o.kt)("p",null,"Releases all resources associated with this view. This method MUST be called\nwhen the Activity holding this view is going to be destroyed, usually in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"onDestroy()")," method."),(0,o.kt)("h4",{id:"getlistener"},"getListener()"),(0,o.kt)("p",null,"Returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetViewListener")," instance attached to the view."),(0,o.kt)("h4",{id:"setlistenerlistener"},"setListener(listener)"),(0,o.kt)("p",null,"Sets the given listener (class implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetViewListener"),"\ninterface) on the view."),(0,o.kt)("h3",{id:"jitsimeetconferenceoptions"},"JitsiMeetConferenceOptions"),(0,o.kt)("p",null,"This object encapsulates all the options that can be tweaked when joining\na conference."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'JitsiMeetConferenceOptions options = new JitsiMeetConferenceOptions.Builder()\n    .setServerURL(new URL("https://meet.jit.si"))\n    .setRoom("test123")\n    .setAudioMuted(false)\n    .setVideoMuted(false)\n    .setAudioOnly(false)\n    .setWelcomePageEnabled(false)\n    .setConfigOverride("requireDisplayName", true)\n    .build();\n')),(0,o.kt)("p",null,"See the ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetConferenceOptions")," implementation for all available options."),(0,o.kt)("h3",{id:"jitsimeetactivitydelegate"},"JitsiMeetActivityDelegate"),(0,o.kt)("p",null,"This class handles the interaction between ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetView")," and its enclosing\n",(0,o.kt)("inlineCode",{parentName:"p"},"Activity"),". Generally this shouldn't be consumed by users, because they'd be\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetActivity")," instead, which is already completely integrated."),(0,o.kt)("p",null,"All its methods are static."),(0,o.kt)("h4",{id:"onactivityresult"},"onActivityResult(...)"),(0,o.kt)("p",null,"Helper method to handle results of auxiliary activities launched by the SDK.\nShould be called from the activity method of the same name."),(0,o.kt)("h4",{id:"onbackpressed"},"onBackPressed()"),(0,o.kt)("p",null,"Helper method which should be called from the activity's ",(0,o.kt)("inlineCode",{parentName:"p"},"onBackPressed")," method.\nIf this function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", it means the action was handled and thus no\nextra processing is required; otherwise the app should call the parent's\n",(0,o.kt)("inlineCode",{parentName:"p"},"onBackPressed")," method."),(0,o.kt)("h4",{id:"onhostdestroy"},"onHostDestroy(...)"),(0,o.kt)("p",null,"Helper method which should be called from the activity's ",(0,o.kt)("inlineCode",{parentName:"p"},"onDestroy")," method."),(0,o.kt)("h4",{id:"onhostresume"},"onHostResume(...)"),(0,o.kt)("p",null,"Helper method which should be called from the activity's ",(0,o.kt)("inlineCode",{parentName:"p"},"onResume")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"onStop"),"\nmethod."),(0,o.kt)("h4",{id:"onhoststop"},"onHostStop(...)"),(0,o.kt)("p",null,"Helper method which should be called from the activity's ",(0,o.kt)("inlineCode",{parentName:"p"},"onSstop")," method."),(0,o.kt)("h4",{id:"onnewintent"},"onNewIntent(...)"),(0,o.kt)("p",null,"Helper method for integrating the ",(0,o.kt)("em",{parentName:"p"},"deep linking")," functionality. If your app's\nactivity is launched in \"singleTask\" mode this method should be called from the\nactivity's ",(0,o.kt)("inlineCode",{parentName:"p"},"onNewIntent")," method."),(0,o.kt)("h4",{id:"onrequestpermissionsresult"},"onRequestPermissionsResult(...)"),(0,o.kt)("p",null,"Helper method to handle permission requests inside the SDK. It should be called\nfrom the activity method of the same name."),(0,o.kt)("h4",{id:"onuserleavehint"},"onUserLeaveHint()"),(0,o.kt)("p",null,"Helper method for integrating automatic Picture-in-Picture. It should be called\nfrom the activity's ",(0,o.kt)("inlineCode",{parentName:"p"},"onUserLeaveHint")," method."),(0,o.kt)("p",null,"This is a static method."),(0,o.kt)("h4",{id:"jitsimeetviewlistener-deprecated---use-listening-for-broadcasted-events-instead"},"JitsiMeetViewListener (deprecated - use Listening for broadcasted events instead)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetViewListener")," provides an interface apps can implement to listen to\nthe state of the Jitsi Meet conference displayed in a ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetView"),"."),(0,o.kt)("h4",{id:"onconferencejoined"},"onConferenceJoined"),(0,o.kt)("p",null,"Called when a conference was joined."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),' contains a "url" key with the conference URL.'),(0,o.kt)("h4",{id:"onconferenceterminated"},"onConferenceTerminated"),(0,o.kt)("p",null,"Called when a conference was terminated either by user choice or due to a\nfailure."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),' contains an "error" key with the error and a "url" key\nwith the conference URL. If the conference finished gracefully no ',(0,o.kt)("inlineCode",{parentName:"p"},"error"),"\nkey will be present."),(0,o.kt)("h4",{id:"onconferencewilljoin"},"onConferenceWillJoin"),(0,o.kt)("p",null,"Called before a conference is joined."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),' contains a "url" key with the conference URL.'),(0,o.kt)("h3",{id:"listening-for-broadcasted-events"},"Listening for broadcasted events"),(0,o.kt)("p",null,"The SDK broadcasts several events that the users can listen for."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    IntentFilter intentFilter = new IntentFilter();\n    intentFilter.addAction(BroadcastEvent.Type.CONFERENCE_JOINED.getAction());\n    LocalBroadcastManager.getInstance(this).registerReceiver(broadcastReceiver, intentFilter);\n")),(0,o.kt)("p",null,"Please see ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetActivity"),", which registers for all the events and can serve as an example."),(0,o.kt)("h4",{id:"supported-events"},"Supported events"),(0,o.kt)("h5",{id:"conference_joined"},"CONFERENCE_JOINED"),(0,o.kt)("p",null,"Broadcasted when a conference was joined. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": the conference URL")),(0,o.kt)("h5",{id:"conference_terminated"},"CONFERENCE_TERMINATED"),(0,o.kt)("p",null,"Broadcasted when the active conference ends, be it because of user choice or because of a failure. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the\nfollowing information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": the conference URL"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": missing if the conference finished gracefully, otherwise contains the error message")),(0,o.kt)("h5",{id:"conference_will_join"},"CONFERENCE_WILL_JOIN"),(0,o.kt)("p",null,"Broadcasted before a conference is joined. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": the conference URL")),(0,o.kt)("h5",{id:"audio_muted_changed"},"AUDIO_MUTED_CHANGED"),(0,o.kt)("p",null,"Broadcasted when the local participant's audio is muted or unmuted. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"muted"),": a boolean indicating whether the audio is muted or not.")),(0,o.kt)("h5",{id:"participant_joined"},"PARTICIPANT_JOINED"),(0,o.kt)("p",null,"Broadcasted when a participant has joined the conference. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"email"),": the email of the participant. It may not be set if the remote participant didn't set one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": the name of the participant."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"role"),": the role of the participant."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"participantId"),": the id of the participant.")),(0,o.kt)("h5",{id:"participant_left"},"PARTICIPANT_LEFT"),(0,o.kt)("p",null,"Called when a participant has left the conference. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"participantId"),": the id of the participant that left.")),(0,o.kt)("h5",{id:"endpoint_text_message_received"},"ENDPOINT_TEXT_MESSAGE_RECEIVED"),(0,o.kt)("p",null,"Broadcasted when an endpoint text message is received. The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," HashMap contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"senderId")," key with the\nparticipantId of the sender and a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," key with the content."),(0,o.kt)("h4",{id:"screen_share_toggled"},"SCREEN_SHARE_TOGGLED"),(0,o.kt)("p",null,"Broadcasted when a participant starts or stops sharing his screen. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"participantId"),": Id of the participant that started or stopped sharing his screen."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sharing"),": True if the participant is sharing his screen, false otherwise.")),(0,o.kt)("h5",{id:"participants_info_retrieved"},"PARTICIPANTS_INFO_RETRIEVED"),(0,o.kt)("p",null,"Broadcasted when a RETRIEVE_PARTICIPANTS_INFO action is called. The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," HashMap contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"participantsInfo")," key\nwith a list of participants information and a ",(0,o.kt)("inlineCode",{parentName:"p"},"requestId")," key with the id that was sent in the\nRETRIEVE_PARTICIPANTS_INFO action."),(0,o.kt)("h5",{id:"chat_message_received"},"CHAT_MESSAGE_RECEIVED"),(0,o.kt)("p",null,"Broadcasted when a chat text message is received. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"senderId"),": the id of the participant that sent the message."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message"),": the content of the message."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isPrivate"),": true if the message is private, false otherwise."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp"),": the (optional) timestamp of the message.")),(0,o.kt)("h5",{id:"chat_toggled"},"CHAT_TOGGLED"),(0,o.kt)("p",null,"Broadcasted when the chat dialog is opened or closed. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isOpen"),": true if the chat dialog is open, false otherwise.")),(0,o.kt)("h5",{id:"video_muted_changed"},"VIDEO_MUTED_CHANGED"),(0,o.kt)("p",null,"Broadcasted when the local participant's video is muted or unmuted. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," contains the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"muted"),": an integer indicating whether the video is muted or not. 0 means unmuted, 4 means muted.")),(0,o.kt)("h5",{id:"ready_to_close"},"READY_TO_CLOSE"),(0,o.kt)("p",null,"The SDK is ready to be closed / dismised."),(0,o.kt)("h3",{id:"broadcasting-actions"},"Broadcasting Actions"),(0,o.kt)("p",null,"The SDK listens for broadcasted actions from the users and reacts accordingly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Intent muteBroadcastIntent = new Intent(BroadcastAction.Type.SET_AUDIO_MUTED.getAction());\n    muteBroadcastIntent.putExtra("muted", muted);\n    LocalBroadcastManager.getInstance(getApplicationContext()).sendBroadcast(muteBroadcastIntent);\n')),(0,o.kt)("p",null,"The intents can be build manually (as shown above) or through the methods in ",(0,o.kt)("inlineCode",{parentName:"p"},"BroadcastIntentHelper"),"."),(0,o.kt)("p",null,"Please see ",(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetOngoingConferenceService")," for more examples of sending actions."),(0,o.kt)("h4",{id:"supported-actions"},"Supported actions"),(0,o.kt)("h5",{id:"set_audio_muted"},"SET_AUDIO_MUTED"),(0,o.kt)("p",null,"Sets the state of the localParticipant audio muted according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"muted")," parameter.\nExpects a ",(0,o.kt)("inlineCode",{parentName:"p"},"muted")," key on the intent extra with a boolean value."),(0,o.kt)("h5",{id:"set_video_muted"},"SET_VIDEO_MUTED"),(0,o.kt)("p",null,"Sets the state of the localParticipant video muted according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"muted")," parameter.\nExpects a ",(0,o.kt)("inlineCode",{parentName:"p"},"muted")," key on the intent extra with a boolean value."),(0,o.kt)("h5",{id:"hang_up"},"HANG_UP"),(0,o.kt)("p",null,"The localParticipant leaves the current conference.\nDoes not expect any extra value."),(0,o.kt)("h5",{id:"send_endpoint_text_message"},"SEND_ENDPOINT_TEXT_MESSAGE"),(0,o.kt)("p",null,"Sends a message via the data channel to one particular participant or to all of them.\nExpects a ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," key on the intent extra with the id of the participant to which the message\nis meant and a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," key with a string value, the actual content of the message.\nIf the ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," key is not present or it's value is empty, the message will be sent\nto all the participants in the conference."),(0,o.kt)("p",null,"In order to get the participantId, the ",(0,o.kt)("inlineCode",{parentName:"p"},"PARTICIPANT_JOINED")," event should be listened for,\nwhich ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," includes the id and this should be stored somehow."),(0,o.kt)("h5",{id:"toggle_screen_share"},"TOGGLE_SCREEN_SHARE"),(0,o.kt)("p",null,"Sets the state of the localParticipant screen share according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," parameter.\nExpects a ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," key on the intent extra with a boolean value."),(0,o.kt)("h5",{id:"retrieve_participants_info"},"RETRIEVE_PARTICIPANTS_INFO"),(0,o.kt)("p",null,"Signals the SDK to retrieve a list with the participants information. The SDK will emit a PARTICIPANTS_INFO_RETRIEVED event.\nExpects a ",(0,o.kt)("inlineCode",{parentName:"p"},"requestId")," key on the intent extra with a string value, this parameter will be present on the PARTICIPANTS_INFO_RETRIEVED event."),(0,o.kt)("h5",{id:"open_chat"},"OPEN_CHAT"),(0,o.kt)("p",null,"Opens the chat dialog. If a ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," key is present with a valid participantId, the private chat for that particular participant will be opened."),(0,o.kt)("h5",{id:"close_chat"},"CLOSE_CHAT"),(0,o.kt)("p",null,"Closes the chat dialog.\nDoes not expect any extra value."),(0,o.kt)("h5",{id:"send_chat_message"},"SEND_CHAT_MESSAGE"),(0,o.kt)("p",null,"Sends a chat message, either a private one if a ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," key is present with a valid participantId and to everybody otherwise.\nExpects a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," key with a string value."),(0,o.kt)("h2",{id:"proguard-rules"},"ProGuard rules"),(0,o.kt)("p",null,"When using the SDK on a project some proguard rules have to be added in order\nto avoid necessary code being stripped. Add the following to your project's\nrules file: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/android/app/proguard-rules.pro"},"https://github.com/jitsi/jitsi-meet/blob/master/android/app/proguard-rules.pro")),(0,o.kt)("h2",{id:"picture-in-picture"},"Picture-in-Picture"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JitsiMeetView"),' will automatically adjust its UI when presented in a\nPicture-in-Picture style scenario, in a rectangle too small to accommodate its\n"full" UI.'),(0,o.kt)("h2",{id:"dropbox-integration"},"Dropbox integration"),(0,o.kt)("p",null,"To setup the Dropbox integration, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the following to the app's AndroidManifest.xml and change ",(0,o.kt)("inlineCode",{parentName:"li"},"<APP_KEY>")," to\nyour Dropbox app key:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<activity\n    android:configChanges="keyboard|orientation"\n    android:launchMode="singleTask"\n    android:name="com.dropbox.core.android.AuthActivity">\n  <intent-filter>\n    <action android:name="android.intent.action.VIEW" />\n    <category android:name="android.intent.category.BROWSABLE" />\n    <category android:name="android.intent.category.DEFAULT" />\n    <data android:scheme="db-<APP_KEY>" />\n  </intent-filter>\n</activity>\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the following to the app's strings.xml and change ",(0,o.kt)("inlineCode",{parentName:"li"},"<APP_KEY>")," to your\nDropbox app key:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<string name="dropbox_app_key"><APP_KEY></string>\n')))}h.isMDXComponent=!0}}]);