import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
// tslint:disable-next-line:ordered-imports
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";

@Component({
    selector: "Deposit",
    moduleId: module.id,
    templateUrl: "./deposit.component.html"
})
export class DepositComponent implements OnInit {

    depositData;
    imageTaken: ImageAsset;
    selectedImage;
    saveToGallery: boolean = true;
    keepAspectRatio: boolean = true;
    width: number = 300;
    height: number = 300;

    constructor(private httpClient: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.httpClient.get("https://jsonplaceholder.typicode.com/photos").subscribe((response: []) => {
            this.depositData = response.slice(0, 300);
            console.log(this.depositData.length);
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    handleSearchChanged(arg) {
        // console.log(arg);
    }

    openCamera() {
        console.log("open camera");
        this.onTakePhoto();
    }

    onTakePhoto() {
        const options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };

        takePicture(options)
            .then((imageAsset) => {
                this.imageTaken = imageAsset;
                alert("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch((err) => {
                console.log(err.message);
            });
    }

    onRequestPermissions() {
        requestPermissions();
    }

    onCheckForCamera() {
        const isCameraAvailable = isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    }

}
