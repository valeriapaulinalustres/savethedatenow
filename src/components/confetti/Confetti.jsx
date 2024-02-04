import './confetti.css'

function Confetti() {
  return (
    <svg width="200" height="200" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="confetti">
    <path id="curlyTwo" d="M389.958 141.456C405.816 127.619 423.788 111.939 423.878 86.8922C423.966 61.9734 406.27 46.3609 390.661 32.5844C389.009 31.1281 387.355 29.6688 385.72 28.1984C379.686 22.7641 370.386 23.2469 364.941 29.2859C359.505 35.325 359.991 44.6281 366.03 50.0656C367.736 51.6031 369.466 53.1281 371.189 54.65C385.689 67.4438 394.488 75.9891 394.448 86.7875C394.409 97.7281 385.416 106.364 370.608 119.283C354.578 133.27 336.405 149.125 336.103 174.68C335.798 200.081 353.534 216.578 369.18 231.136C382.387 243.42 393.792 254.028 393.784 267.492C393.777 280.348 383.15 290.503 370.842 302.258C355.577 316.842 338.273 333.372 338.058 359.605C337.844 385.613 354.575 402.797 369.333 417.956C380.917 429.853 390.925 440.13 390.475 451.788C390.067 462.403 381.7 469.697 368.086 480.719C353.675 492.384 335.739 506.902 334.795 531.409C333.852 555.917 350.28 572.881 364.77 587.85C376.991 600.469 387.539 611.364 387.198 624.206C386.894 635.6 378.3 643.789 364.18 655.923C349.887 668.208 332.095 683.497 331.503 708.07C331.306 716.194 337.734 722.939 345.856 723.136C345.98 723.138 346.097 723.141 346.222 723.141C354.183 723.141 360.731 716.784 360.923 708.781C361.183 698.059 369.573 690.092 383.363 678.241C397.877 665.767 415.941 650.241 416.616 624.992C417.292 599.783 400.623 582.567 385.916 567.377C374.019 555.089 363.742 544.478 364.205 532.541C364.614 521.914 372.984 514.617 386.605 503.592C401.012 491.93 418.944 477.414 419.883 452.916C420.817 428.644 404.667 412.058 390.419 397.425C378.052 384.722 367.37 373.753 367.487 359.845C367.602 346.052 378.525 335.617 391.173 323.534C406.183 309.191 423.198 292.937 423.214 267.506C423.23 241.216 405.162 224.413 389.225 209.584C376.431 197.684 365.381 187.406 365.528 175.028C365.669 163.473 374.85 154.636 389.958 141.456Z" fill="black"/>
    <path id="curlyOne" d="M133.056 209.586C120.263 197.686 109.213 187.405 109.359 175.03C109.498 163.475 118.681 154.636 133.788 141.455C149.645 127.617 167.619 111.934 167.708 86.8906C167.797 61.9687 150.098 46.3547 134.484 32.5766C132.834 31.1203 131.183 29.6656 129.55 28.1953C123.516 22.7609 114.208 23.2437 108.77 29.2844C103.334 35.3234 103.82 44.6265 109.859 50.064C111.564 51.6 113.291 53.125 115.016 54.6453C129.517 67.439 138.319 75.9859 138.28 86.7859C138.241 97.7265 129.247 106.362 114.439 119.281C98.4094 133.269 80.2391 149.123 79.9344 174.678C79.6297 200.08 97.3656 216.577 113.011 231.131C126.219 243.416 137.623 254.027 137.616 267.487C137.608 280.344 126.981 290.498 114.673 302.253C99.4078 316.837 82.1047 333.367 81.8891 359.602C81.8219 367.728 88.3547 374.369 96.4813 374.434C96.5219 374.434 96.5641 374.434 96.6047 374.434C104.673 374.434 111.25 367.927 111.317 359.842C111.431 346.05 122.355 335.614 135.003 323.531C150.013 309.187 167.028 292.934 167.044 267.503C167.061 241.217 148.994 224.412 133.056 209.586Z" fill="black"/>
    <path id="curlyThree" d="M624.559 480.717C610.148 492.383 592.212 506.9 591.269 531.408C590.955 539.528 597.284 546.364 605.403 546.677C605.597 546.683 605.787 546.686 605.98 546.686C613.845 546.686 620.367 540.466 620.672 532.539C621.081 521.913 629.452 514.616 643.072 503.591C657.48 491.928 675.411 477.413 676.35 452.914C677.284 428.642 661.134 412.056 646.884 397.423C634.517 384.72 623.837 373.752 623.953 359.844C624.067 346.052 634.991 335.616 647.639 323.533C662.648 309.189 679.664 292.936 679.68 267.505C679.695 241.214 661.628 224.411 645.691 209.583C632.897 197.683 621.847 187.405 621.994 175.027C622.131 163.472 631.314 154.633 646.422 141.452C662.28 127.614 680.252 111.934 680.342 86.8875C680.431 61.9688 662.734 46.3563 647.125 32.5797C645.473 31.1234 643.819 29.6641 642.187 28.1938C636.148 22.7594 626.845 23.2438 621.406 29.2813C615.97 35.3203 616.456 44.6234 622.494 50.0609C624.203 51.5984 625.931 53.1234 627.655 54.6453C642.155 67.4391 650.953 75.9844 650.914 86.7828C650.875 97.7234 641.881 106.359 627.073 119.278C611.044 133.266 592.87 149.12 592.569 174.675C592.264 200.077 610 216.573 625.645 231.131C638.853 243.416 650.258 254.023 650.25 267.488C650.242 280.344 639.616 290.498 627.308 302.253C612.042 316.838 594.739 333.367 594.523 359.6C594.309 385.608 611.041 402.792 625.798 417.952C637.383 429.848 647.391 440.125 646.941 451.783C646.541 462.4 638.173 469.695 624.559 480.717Z" fill="black"/>
    <g id="starLeft">
    <path id="Vector" d="M223.928 515.805L239.158 546.663C239.491 547.338 240.134 547.805 240.878 547.912L274.931 552.861C276.806 553.134 277.555 555.437 276.198 556.761L251.558 580.78C251.019 581.305 250.773 582.061 250.9 582.802L256.717 616.717C257.037 618.584 255.077 620.009 253.4 619.127L222.942 603.114C222.277 602.764 221.481 602.764 220.816 603.114L190.358 619.127C188.68 620.008 186.72 618.584 187.041 616.717L192.858 582.802C192.986 582.059 192.741 581.303 192.2 580.78L167.559 556.761C166.202 555.439 166.952 553.133 168.827 552.861L202.88 547.912C203.625 547.805 204.269 547.336 204.6 546.663L219.83 515.805C220.667 514.105 223.091 514.105 223.928 515.805Z" fill="#F9DE8F"/>
    <path id="Vector_2" d="M277.047 539.764L249.461 535.756L237.123 510.756L237.122 510.755C234.236 504.911 228.397 501.281 221.878 501.281H221.87C215.352 501.283 209.511 504.919 206.633 510.756L194.295 535.755L166.706 539.762C160.258 540.702 154.998 545.134 152.984 551.331C150.97 557.528 152.617 564.206 157.284 568.758L177.248 588.216L172.536 615.695C170.209 629.292 184.936 640.066 197.202 633.612L221.875 620.639L246.545 633.609C252.313 636.641 259.175 636.152 264.448 632.32C269.723 628.491 272.317 622.119 271.214 615.692L266.503 588.214L286.469 568.753C291.134 564.203 292.781 557.528 290.767 551.33C288.753 545.131 283.5 540.702 277.047 539.764ZM241.284 571.708C237.27 575.622 235.445 581.255 236.397 586.752L237.958 595.848L229.775 591.547C227.303 590.25 224.592 589.603 221.881 589.603C219.166 589.603 216.447 590.255 213.967 591.555L205.798 595.848L207.355 586.775C208.309 581.255 206.488 575.62 202.472 571.706L195.863 565.264L204.995 563.936C210.533 563.131 215.32 559.655 217.797 554.637L221.881 546.361L225.952 554.608C228.422 559.644 233.213 563.131 238.764 563.936L247.897 565.264L241.284 571.708Z" fill="black"/>
    </g>
    <g id="starRight">
    <path id="Vector_3" d="M637.852 655.798L653.081 686.656C653.414 687.331 654.058 687.798 654.802 687.906L688.855 692.855C690.73 693.128 691.478 695.431 690.122 696.755L665.481 720.773C664.942 721.298 664.697 722.055 664.823 722.795L670.641 756.711C670.961 758.578 669 760.003 667.323 759.12L636.866 743.108C636.2 742.758 635.405 742.758 634.739 743.108L604.281 759.12C602.603 760.002 600.644 758.578 600.964 756.711L606.781 722.795C606.909 722.053 606.664 721.297 606.123 720.773L581.483 696.755C580.125 695.433 580.875 693.127 582.75 692.855L616.803 687.906C617.548 687.798 618.192 687.33 618.523 686.656L633.753 655.798C634.589 654.1 637.012 654.1 637.852 655.798Z" fill="#F9DE8F"/>
    <path id="Vector_4" d="M690.97 679.761L663.383 675.753L651.045 650.753L651.044 650.752C648.158 644.908 642.317 641.278 635.8 641.278C629.283 641.278 623.442 644.908 620.555 650.753L608.217 675.753L580.634 679.761C574.181 680.697 568.922 685.128 566.908 691.328C564.894 697.53 566.541 704.208 571.208 708.758L591.172 728.217L586.458 755.697C585.358 762.117 587.948 768.487 593.22 772.319C598.492 776.152 605.348 776.648 611.127 773.616L635.8 760.644L660.48 773.619C672.741 780.053 687.484 769.298 685.138 755.695L680.427 728.22L700.388 708.763C705.056 704.213 706.706 697.533 704.689 691.333C702.68 685.128 697.419 680.694 690.97 679.761ZM655.208 711.705C651.208 715.606 649.38 721.225 650.323 726.748L651.883 735.845L643.731 731.559C638.77 728.942 632.844 728.941 627.894 731.55L619.725 735.844L621.289 726.733C622.228 721.222 620.4 715.603 616.398 711.7L609.789 705.258L618.927 703.93C624.456 703.123 629.241 699.652 631.72 694.631L635.805 686.355L639.894 694.639C642.372 699.65 647.153 703.123 652.689 703.928L661.822 705.256L655.208 711.705Z" fill="black"/>
    </g>
    <g id="circleOne">
    <path id="Vector_5" d="M249.605 321.566C270.3 321.566 287.077 304.789 287.077 284.094C287.077 263.399 270.3 246.622 249.605 246.622C228.91 246.622 212.133 263.399 212.133 284.094C212.133 304.789 228.91 321.566 249.605 321.566Z" fill="#67D1D3"/>
    <path id="Vector_6" d="M249.606 233.372C220.834 233.372 197.425 256.781 197.425 285.553C197.425 314.325 220.834 337.734 249.606 337.734C278.378 337.734 301.788 314.325 301.788 285.553C301.788 256.781 278.378 233.372 249.606 233.372ZM249.606 308.305C237.061 308.305 226.853 298.097 226.853 285.552C226.853 273.006 237.061 262.798 249.606 262.798C262.152 262.798 272.359 273.006 272.359 285.552C272.359 298.097 262.153 308.305 249.606 308.305Z" fill="black"/>
    </g>
    <g id="circleTwo">
    <path id="Vector_7" d="M517.356 189.944C538.051 189.944 554.827 173.168 554.827 152.473C554.827 131.779 538.051 115.003 517.356 115.003C496.662 115.003 479.886 131.779 479.886 152.473C479.886 173.168 496.662 189.944 517.356 189.944Z" fill="#67D1D3"/>
    <path id="Vector_8" d="M517.358 101.764C488.586 101.764 465.177 125.173 465.177 153.945C465.177 182.717 488.586 206.127 517.358 206.127C546.13 206.127 569.539 182.717 569.539 153.945C569.539 125.173 546.13 101.764 517.358 101.764ZM517.358 176.697C504.813 176.697 494.605 166.489 494.605 153.944C494.605 141.398 504.813 131.191 517.358 131.191C529.903 131.191 540.111 141.398 540.111 153.944C540.111 166.489 529.902 176.697 517.358 176.697Z" fill="black"/>
    </g>
    <g id="circleThree">
    <path id="Vector_9" d="M746.833 409.789C767.528 409.789 784.305 393.012 784.305 372.317C784.305 351.622 767.528 334.845 746.833 334.845C726.138 334.845 709.361 351.622 709.361 372.317C709.361 393.012 726.138 409.789 746.833 409.789Z" fill="#F09EA0"/>
    <path id="Vector_10" d="M746.83 321.595C718.058 321.595 694.648 345.005 694.648 373.777C694.648 402.548 718.058 425.958 746.83 425.958C775.602 425.958 799.011 402.548 799.011 373.777C799.011 345.005 775.603 321.595 746.83 321.595ZM746.83 396.53C734.284 396.53 724.077 386.322 724.077 373.777C724.077 361.231 734.284 351.023 746.83 351.023C759.375 351.023 769.583 361.231 769.583 373.777C769.584 386.322 759.375 396.53 746.83 396.53Z" fill="black"/>
    </g>
    <g id="dotsOne">
    <path id="Vector_11" d="M31.4094 99.0719C31.4094 90.4125 24.3641 83.3672 15.7047 83.3672C7.04531 83.3672 0 90.4125 0 99.0719C0 107.731 7.04531 114.777 15.7047 114.777C24.3641 114.777 31.4094 107.731 31.4094 99.0719Z" fill="black"/>
    <path id="Vector_12" d="M94.6453 704.669C85.9859 704.669 78.9406 711.714 78.9406 720.373C78.9406 729.033 85.9859 736.078 94.6453 736.078C103.305 736.078 110.35 729.033 110.35 720.373C110.35 711.714 103.305 704.669 94.6453 704.669Z" fill="black"/>
    <path id="Vector_13" d="M494.614 560.988C485.955 560.988 478.909 568.033 478.909 576.692C478.909 585.352 485.955 592.397 494.614 592.397C503.273 592.397 510.319 585.352 510.319 576.692C510.319 568.033 503.273 560.988 494.614 560.988Z" fill="black"/>
    </g>
    <g id="dotsThree">
    <path id="Vector_14" d="M181.589 442.342C190.248 442.342 197.294 435.297 197.294 426.638C197.294 417.978 190.248 410.933 181.589 410.933C172.93 410.933 165.884 417.978 165.884 426.638C165.884 435.297 172.928 442.342 181.589 442.342Z" fill="black"/>
    <path id="Vector_15" d="M784.295 65.65C792.955 65.65 800 58.6047 800 49.9453C800 41.2859 792.955 34.2406 784.295 34.2406C775.636 34.2406 768.591 41.2859 768.591 49.9453C768.591 58.6047 775.636 65.65 784.295 65.65Z" fill="black"/>
    <path id="Vector_16" d="M30.4281 430.87C21.7688 430.87 14.7234 437.916 14.7234 446.575C14.7234 455.234 21.7688 462.28 30.4281 462.28C39.0875 462.28 46.1328 455.234 46.1328 446.575C46.1328 437.916 39.0875 430.87 30.4281 430.87Z" fill="black"/>
    </g>
    <g id="dotsTwo">
    <path id="Vector_17" d="M517.358 292.591C508.698 292.591 501.653 299.636 501.653 308.295C501.653 316.955 508.698 324 517.358 324C526.017 324 533.062 316.955 533.062 308.295C533.062 299.636 526.017 292.591 517.358 292.591Z" fill="black"/>
    <path id="Vector_18" d="M739.681 575.711C731.022 575.711 723.977 582.756 723.977 591.416C723.977 600.075 731.022 607.12 739.681 607.12C748.341 607.12 755.386 600.075 755.386 591.416C755.386 582.756 748.341 575.711 739.681 575.711Z" fill="black"/>
    <path id="Vector_19" d="M276.892 95.0984C285.552 95.0984 292.597 88.0531 292.597 79.3937C292.597 70.7344 285.552 63.6891 276.892 63.6891C268.233 63.6891 261.188 70.7344 261.188 79.3937C261.188 88.0531 268.233 95.0984 276.892 95.0984Z" fill="black"/>
    </g>
    </g>
    </svg>
    
  )
}

export default Confetti