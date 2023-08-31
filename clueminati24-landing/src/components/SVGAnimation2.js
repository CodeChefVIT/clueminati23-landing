import { animate, easeIn, motion, transform } from "framer-motion";
import { useState, useEffect } from "react";
const SVGAnimation2 = ({ fill}) => {
  return (
    <motion.svg
      viewBox="0 0 135 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-24 h-24`}
      drag
      dragConstraints={{
        top: -10,
        right: 10,
        bottom: 10,
        left: -10,
    }}
    >
      <motion.path

        d="M38.3222 14.1555C38.1154 14.0182 37.8833 13.9143 37.6539 13.8082C35.7137 14.4821 33.7425 15.0765 31.7422 15.5632C31.6482 15.819 31.6099 16.1336 31.9258 16.7576C36.528 21.8681 40.1416 30.5047 41.0027 39.6213C41.8524 47.596 41.3889 56.1509 44.0209 63.6794C47.4914 63.0367 51.0961 62.6363 54.7208 62.4241C50.8856 51.4729 48.3899 40.2176 47.4725 28.8171C47.01 23.9343 47.4804 19.0293 48.8678 14.2713C49.695 11.9313 50.9107 10.0849 52.5764 8.91489C49.2676 9.57633 45.866 10.5945 42.655 11.9922C41.0683 12.5944 39.426 13.1913 37.7641 13.7716C37.9784 13.8746 38.1926 13.9638 38.3956 14.0824L38.3222 14.1555ZM38.3222 14.1555L38.2781 14.1982H38.3956C38.3731 14.1826 38.3485 14.1742 38.3222 14.1555ZM41.75 106H44.25C45.3466 106 46.1957 105.5 47.3611 105.5C49.067 105.5 50.5637 105.667 52.125 106.014C52.945 106.196 50.6812 107.064 50.5 107.306C49.8389 108.187 48.6127 108.626 47.6944 109.194C46.6554 109.838 44.5 111.441 44.5 112.75M85.5532 105.5H83.0532C81.9566 105.5 81.1075 105 79.9421 105C78.2362 105 76.7395 105.167 75.1782 105.514C74.3582 105.696 76.622 106.564 76.8032 106.806C77.4643 107.687 78.6905 108.126 79.6088 108.694C80.6478 109.338 82.8032 110.941 82.8032 112.25M60.985 2.01068C58.0142 2.05475 55.0076 2.24141 51.9742 2.60177C47.5149 3.40673 43.2079 4.70743 39.3577 6.38599C34.5073 8.21431 29.4911 10.103 24.9566 10.3713C24.7272 10.3838 24.5028 10.4159 24.2809 10.4627C17.9416 11.8199 12.4739 15.0686 8.95453 19.5302L8.38906 20.2127C8.2725 20.3562 8.16352 20.5076 8.07328 20.6636C4.97128 26.0488 4.14555 32.2161 5.81875 38.2502C6.89411 41.1674 8.17639 43.9696 9.41719 46.684L9.79906 47.5066C12.698 53.1507 14.8037 59.0801 16.0633 65.1297C16.1272 65.4355 16.243 65.7327 16.4084 66.0072C17.6455 68.0415 18.6134 70.1823 19.3166 72.4849C19.6286 73.3866 19.9474 74.3125 20.2933 75.2454C20.391 75.5106 20.5794 75.7276 20.7486 75.9522C20.7561 76.2798 20.8079 76.609 20.9395 76.9272L26.1609 89.3219C26.5144 90.1643 27.2833 90.8375 28.2759 91.1744C29.2723 91.5114 30.3904 91.4791 31.353 91.0891C41.2117 87.1142 64.3031 77.8073 96.1616 94.3371C96.7707 94.6522 97.4635 94.8124 98.1591 94.8124C98.6667 94.8124 99.1723 94.7312 99.6498 94.5565C100.785 94.1477 101.609 93.3034 101.846 92.2957C102.616 89.0415 102.891 83.8184 102.639 79.5658L102.874 78.6335C103.178 77.4011 103.479 76.1518 103.799 74.9163C106.777 69.4189 112.044 64.1046 117.143 58.9629C125.133 50.9039 133.396 42.5726 132.682 33.2594C132.648 32.8351 132.515 32.4182 132.285 32.0407C131.109 30.1188 129.79 28.2478 128.158 26.148L127.842 25.7276C127.463 25.2346 127.081 24.7482 126.69 24.2833C126.396 23.9339 126.098 23.6023 125.801 23.2779L125.485 22.9244C124.887 22.263 124.291 21.6045 123.679 20.9805C123.348 20.6498 123.021 20.335 122.584 19.9263C121.904 19.2773 121.227 18.6514 120.535 18.0555L119.625 17.2877C118.824 16.6294 118.02 16.0032 117.231 15.4291L116.651 15.0147C106.653 7.93858 96.3852 6.07745 90.1323 4.94177L86.6441 4.28974C78.4999 2.99338 69.8974 1.87847 60.985 2.01068ZM64.7156 8.26286C68.1184 8.34593 71.577 8.61586 75.1584 9.02458C62.9084 24.1597 64.9976 44.6263 67.8514 62.479C64.114 62.2387 60.2855 62.1706 56.4466 62.3266C54.2733 51.6999 52.0012 38.3595 50.0648 27.8482C49.4858 23.1151 49.9881 18.3365 51.5409 13.7594C53.0825 11.0045 53.2269 9.44934 54.6106 8.6163C57.9702 8.2809 61.3128 8.17979 64.7156 8.26286ZM75.3641 9.04286C78.5037 9.40478 81.7326 9.86201 85.1166 10.4018L88.6416 11.0599C91.2472 11.5341 94.4708 12.1383 97.9902 13.1866C91.899 22.2253 87.7895 32.099 85.917 42.3513C84.571 49.7644 83.9561 57.2456 83.9636 64.7336C79.3839 63.6947 74.1422 62.9269 68.6225 62.5338C68.4044 58.5558 68.247 54.5098 68.4463 52.2354C69.1005 44.7006 69.8594 21.4012 75.3641 9.04286ZM98.9522 13.4608C102.998 14.7494 107.405 16.67 111.767 19.7557L112.259 20.1152C112.951 20.6175 113.638 21.1561 114.33 21.724L115.123 22.3882C115.717 22.903 116.311 23.4477 117.025 24.131C117.307 24.3993 117.588 24.6669 117.862 24.9415C118.276 25.3627 118.679 25.8145 119.089 26.2638C112.14 28.504 100.605 49.7648 99.033 68.9871C98.7585 69.3896 98.4735 69.788 98.2178 70.1936C95.0782 68.0034 90.6228 66.419 86.6147 65.3613C85.983 65.1959 85.301 65.0481 84.6392 64.8921C85.2408 57.3542 86.0923 49.4534 86.9158 42.3086C89.5854 30.5774 96.4255 24.5618 98.9522 13.4608ZM30.5672 15.8618C30.7514 16.2986 31.0393 16.7097 31.4191 17.0622C35.9762 22.1915 36.8597 30.5356 37.8448 39.6335C38.6833 47.655 39.6449 56.2564 43.2131 63.8318C40.1713 64.4339 37.2558 65.2284 34.5034 66.2205C32.255 59.472 31.1834 51.8634 29.4877 44.9838C27.1865 35.68 26.8853 27.3532 23.0839 24.8135C21.625 23.1443 17.7201 23.2919 19.5662 20.2249C20.0062 19.5697 20.5527 18.9717 21.0791 18.3602C22.568 17.6052 24.1453 16.9647 25.8598 16.5747C27.4315 16.4593 29.003 16.1987 30.5672 15.8618ZM19.8233 18.9879C19.4698 19.3872 19.1205 19.7937 18.8686 20.2493C18.188 21.2913 17.8925 22.4763 18.0241 23.6557C18.1406 24.2734 18.4432 24.8596 18.8906 25.3619C22.6469 27.8486 24.5947 35.7508 26.8733 45.0204C28.5916 52.006 30.5803 59.7351 33.6222 66.5679C30.9902 67.5756 28.5445 68.7861 26.3298 70.2119C25.5854 67.9499 24.6149 65.7307 23.3703 63.6185C22.0017 57.2474 19.765 51.0101 16.7683 45.1788L16.4452 44.4719C15.2495 41.8542 14.0106 39.1498 13.0744 36.6475C11.8712 32.2764 12.4557 27.6418 14.7267 23.5765L15.182 23.0341C16.4341 21.446 18.011 20.083 19.8233 18.9879ZM119.434 26.6416C119.441 26.6479 119.441 26.6505 119.449 26.6599L119.801 27.0438C120.049 27.309 120.291 27.5796 120.528 27.8604C120.859 28.2535 121.181 28.6701 121.505 29.0913L121.843 29.53C123.162 31.2242 124.244 32.7484 125.206 34.271C125.289 40.9322 118.508 47.7729 111.341 55.0019C108.551 57.813 105.721 60.6726 103.16 63.6429C108.947 51.3501 114.535 39.1029 119.434 26.6416ZM59.0169 68.5422C68.1536 68.3685 77.3419 69.468 84.3381 71.3149C92.6891 73.5176 94.6799 75.8269 94.7589 76.4946C94.898 77.2621 94.9959 78.196 95.0673 79.1819L95.0453 79.2611C94.9175 79.7697 94.9938 80.2617 95.1555 80.7297C95.2269 82.6329 95.2025 84.6828 95.0747 86.5797C81.9636 80.6455 70.1689 78.6579 60.1184 78.6579C47.8383 78.6579 38.1683 81.6282 31.8891 83.9838L28.79 76.6286C35.6088 71.0899 47.2696 68.7656 59.0169 68.5422ZM39.8864 97.0915L38.1827 98.0421C38.9046 99.0467 39.8386 99.9353 40.9366 100.668C41.8014 101.118 42.811 101.337 43.83 101.296C44.3526 101.293 44.8683 101.235 45.3722 101.113L51.0563 99.4071C51.4435 99.2823 51.8544 99.2182 52.268 99.2182C52.8921 99.1839 53.5152 99.3241 54.0378 99.6143C54.756 100.101 55.3773 100.672 55.8811 101.314L57.4967 100.565V100.528C56.7974 99.6266 55.9232 98.8285 54.9117 98.164C54.0996 97.696 53.132 97.4476 52.1431 97.4632C51.8122 97.4569 51.4783 97.5094 51.1737 97.6155L45.0197 99.3218C44.6286 99.4216 44.2178 99.4652 43.808 99.4558C43.0785 99.4995 42.3496 99.3331 41.7517 98.9805C41.0035 98.4408 40.3752 97.8028 39.8864 97.0915ZM103.021 100.492C102.434 100.535 101.895 100.775 101.522 101.156C101.075 101.471 100.79 101.912 100.722 102.399C100.681 102.505 100.681 102.622 100.722 102.728C102.046 103.889 103.737 104.706 105.606 105.093C107.474 105.57 109.345 106.03 111.172 106.458C113.022 106.966 114.593 108.006 115.608 109.389C115.627 109.451 115.627 109.515 115.608 109.578C115.608 109.868 114.768 110.342 113.148 111.022C112.328 111.415 111.095 112.28 109.043 113.575C107.76 114.446 106.389 115.217 104.937 115.878C103.704 116.334 102.621 117.037 101.794 117.92C101.775 117.935 101.758 117.95 101.743 117.969C101.089 118.593 101.167 119.546 101.919 120.089C102.31 120.401 102.835 120.571 103.38 120.565C103.768 120.558 104.147 120.477 104.489 120.327C107.136 118.942 109.68 117.419 112.105 115.775C114.564 114.084 117.132 112.498 119.786 111.022C121.264 110.273 121.982 109.49 121.982 108.688C121.933 108.151 121.58 107.665 121.035 107.378C117.87 105.019 114.135 103.268 110.085 102.216L107.104 101.144C106.1 100.766 105.022 100.545 103.924 100.492C103.623 100.457 103.318 100.457 103.021 100.492ZM21.1158 100.668C18.4913 102.303 15.6206 103.643 12.575 104.654C9.55572 105.687 6.69577 107.014 4.05625 108.609C2.77409 109.56 2.02632 110.912 2 112.338C2.1504 112.878 2.61335 113.326 3.23375 113.532C3.78647 113.685 4.36633 113.869 4.92281 114.056C10.5365 116.031 15.8045 118.159 20.7339 120.431C21.3881 120.824 22.0019 121.254 22.5772 121.722C22.9532 121.86 23.357 121.93 23.7669 121.93C24.7783 121.936 25.7645 121.647 26.5428 121.113C27.3362 120.645 27.7538 119.855 27.6297 119.053C27.6635 118.464 27.2375 117.919 26.5795 117.701L18.0828 114.599C15.2628 113.607 12.5122 112.468 9.86516 111.192C11.7226 109.274 14.2272 107.852 17.0547 107.103C19.8634 106.352 22.4555 105.127 24.6702 103.508C24.9898 103.255 25.1659 102.904 25.1622 102.539C25.1471 102.024 24.8543 101.541 24.3617 101.229C23.7752 100.855 23.0535 100.656 22.3128 100.668H21.1158ZM59.9862 121.424C59.9411 121.461 59.9133 121.505 59.8908 121.558V121.698C60.1728 122.35 60.527 122.973 60.9556 123.569C61.3429 124.14 61.831 124.667 62.395 125.123C62.9026 125.563 63.4957 125.927 64.1575 126.195C64.808 126.423 65.5069 126.548 66.2138 126.567L66.2945 126.64C66.8623 126.643 67.4241 126.556 67.9542 126.384C68.4618 126.213 68.9426 125.991 69.3863 125.726C69.8074 125.445 70.204 125.14 70.5612 124.806C70.8996 124.488 71.1977 124.147 71.4572 123.782C71.7053 123.461 71.9301 123.126 72.1181 122.777C72.2648 122.524 72.3841 122.265 72.4706 121.997V121.844C72.4293 121.797 72.3941 121.745 72.3678 121.692C71.8339 122.375 71.1705 122.975 70.3997 123.477C69.8094 123.939 69.1067 124.295 68.3434 124.519C67.5726 124.741 66.758 124.849 65.942 124.842C65.2464 124.852 64.5513 124.77 63.8858 124.605C63.3143 124.455 62.7806 124.222 62.3069 123.922C61.8256 123.601 61.3904 123.24 61.0144 122.838C60.6196 122.395 60.272 121.92 59.9862 121.424ZM54.5445 127.962C46.3327 128.321 41.5466 137.073 30.0898 128.998C26.969 144.502 49.8008 146.039 59.1858 139.035C65.6755 134.23 63.8468 127.535 54.5445 127.962ZM73.3592 127.962C65.5174 128.364 64.2935 134.533 70.3777 139.035C79.7626 146.036 102.587 144.502 99.4662 128.998C88.0095 137.073 83.2272 128.318 75.0116 127.962C74.4302 127.936 73.882 127.936 73.3592 127.962Z"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default SVGAnimation2;
