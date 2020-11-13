import React from 'react';

class ProfileImageWidget extends React.Component {
  constructor(props) {
    super(props);
this.showWidget = this.showWidget.bind(this);
}

  showWidget(widget) {
    widget.open();
  }
  
  render() {
    const newProfileImage = this.props.newProfileImage;
    const widget = window.cloudinary.createUploadWidget({ //cloudinary's upload images widget
      cloudName: 'dysv4qjk7',
      uploadPreset: 'jkkfqmxl'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        newProfileImage.push(result.info.secure_url); //pushes clodynary image url to array to be added in database
      }
    }
    )
    return (
      <button type="button" id="upload_widget" className="cloudinary-button" onClick={ () => this.showWidget(widget) }>Upload files</button>
    );
  }
}

export default ProfileImageWidget;