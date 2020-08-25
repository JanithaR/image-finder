import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width: number;
  testID: string;
}

export function NoImagesFound(props: Props) {
  return (
    <Svg
      viewBox="0 0 802.067 590.747"
      height={Math.round(props.width / (802.067 / 590.747))}
      {...props}>
      <Path
        d="M325.404 383.323L175.797 483.389 28.454 263.1 178.06 163.033l147.343 220.29"
        fill="#f3f2f1"
      />
      <Path
        d="M248.115 372.877l-1.698 10.508-74.372-10.714 1.699-10.507 74.37 10.713"
        fill="#dadbd8"
      />
      <Path
        d="M210.66 335.393l10.672 1.539-11.832 73.223-10.672-1.538 11.832-73.224M142.157 242.325c.107.16-14.886 10.375-33.482 22.814-18.603 12.442-33.766 22.397-33.871 22.237-.107-.159 14.882-10.372 33.485-22.815 18.596-12.438 33.763-22.394 33.868-22.236M197.176 228.515c.107.16-24.825 17.022-55.679 37.658-30.865 20.646-55.964 37.246-56.07 37.086-.107-.159 24.82-17.019 55.684-37.662 30.854-20.637 55.958-37.242 56.065-37.082M208.204 245.003c.108.16-24.824 17.022-55.679 37.658-30.864 20.646-55.964 37.246-56.07 37.087-.107-.16 24.82-17.019 55.685-37.663 30.853-20.637 55.957-37.241 56.064-37.082M219.233 261.49c.107.16-24.825 17.023-55.678 37.66-30.866 20.645-55.965 37.245-56.072 37.086-.106-.159 24.82-17.019 55.685-37.663 30.853-20.637 55.959-37.241 56.065-37.082M230.261 277.98c.107.16-24.825 17.023-55.678 37.659-30.866 20.644-55.964 37.245-56.071 37.085-.107-.159 24.82-17.017 55.684-37.661 30.855-20.638 55.959-37.242 56.065-37.083"
        fill="#dadbd8"
      />
      <Path
        d="M802.064 495.677l-125.645 84.038-123.742-185.006 125.644-84.038 123.743 185.006"
        fill="#f3f2f1"
      />
      <Path
        d="M737.153 486.904l-1.425 8.825-62.459-8.998 1.427-8.824 62.457 8.997"
        fill="#dadbd8"
      />
      <Path
        d="M705.7 455.425l8.961 1.29-9.937 61.496-8.963-1.29 9.939-61.496M648.168 377.264c.107.159-12.47 8.757-28.088 19.204-15.624 10.45-28.372 18.79-28.479 18.63-.106-.16 12.47-8.758 28.094-19.207 15.616-10.447 28.366-18.788 28.473-18.627M694.373 365.664c.107.159-20.817 14.341-46.729 31.673-25.921 17.338-47.013 31.26-47.12 31.099-.107-.159 20.813-14.337 46.733-31.675 25.914-17.332 47.01-31.257 47.116-31.097M703.637 379.512c.107.159-20.82 14.341-46.73 31.673-25.922 17.338-47.015 31.258-47.122 31.099-.105-.159 20.814-14.339 46.736-31.676 25.911-17.332 47.01-31.256 47.116-31.096M712.899 393.36c.106.159-20.818 14.341-46.731 31.673-25.92 17.338-47.013 31.258-47.12 31.099-.107-.159 20.813-14.339 46.735-31.676 25.912-17.332 47.009-31.256 47.116-31.096M722.16 407.207c.107.16-20.817 14.341-46.73 31.673-25.92 17.337-47.013 31.259-47.12 31.1-.107-.16 20.813-14.339 46.734-31.677 25.912-17.331 47.01-31.256 47.116-31.096"
        fill="#dadbd8"
      />
      <Path
        d="M371.587 372.97l-137.091-73.32L342.455 97.789l137.092 73.319-107.96 201.862"
        fill="#f3f2f1"
      />
      <Path
        d="M348.119 309.823l-8.699 2.978-22.076-61.032 8.697-2.978 22.078 61.032"
        fill="#dadbd8"
      />
      <Path
        d="M361.453 266.039l3.168 8.757-60.612 20.759-3.168-8.759 60.612-20.757M404.521 175.99c-.106.2-14.012-7.027-31.053-16.14-17.047-9.117-30.773-16.667-30.667-16.869.107-.201 14.01 7.026 31.056 16.142 17.04 9.114 30.772 16.666 30.664 16.866M437.419 212.3c-.108.201-23.12-11.896-51.392-27.017-28.284-15.127-51.116-27.547-51.01-27.747.107-.201 23.115 11.895 51.398 27.02 28.273 15.121 51.11 27.544 51.004 27.744M429.337 227.41c-.106.2-23.118-11.897-51.392-27.018-28.282-15.125-51.116-27.547-51.008-27.748.107-.2 23.115 11.895 51.398 27.021 28.272 15.122 51.11 27.544 51.002 27.744M421.256 242.519c-.107.201-23.117-11.896-51.39-27.018-28.283-15.126-51.117-27.546-51.01-27.748.108-.2 23.115 11.895 51.397 27.022 28.274 15.12 51.112 27.544 51.003 27.744M413.176 257.628c-.107.201-23.119-11.897-51.392-27.017-28.283-15.127-51.116-27.547-51.008-27.748.107-.202 23.115 11.894 51.397 27.02 28.272 15.121 51.111 27.545 51.003 27.745"
        fill="#dadbd8"
      />
      <Path d="M410.45 58.643h3.445V-.002h-3.444z" fill="#c3c5c2" />
      <Path
        d="M331.865 129.584H492.48s-14.83-70.979-81.524-70.979c-59.323 0-79.09 70.979-79.09 70.979"
        fill="#f03d5f"
      />
      <Path d="M413.895-.001h-3.444v58.644h3.444V-.001" fill="#f03d5f" />
      <Path
        d="M769.777 586.436c0 .192-172.334.348-384.87.348-212.61 0-384.907-.156-384.907-.348 0-.19 172.297-.347 384.907-.347 212.536 0 384.87.156 384.87.347"
        fill="#17282f"
      />
      <Path
        d="M42.603 502.935c4.508.157 8.74 2.605 11.714 5.997 2.973 3.392 4.796 7.658 5.962 12.015 2.256 8.431.87 18.38-1.535 26.77-9.128-3.261-14.757-12.996-17.302-18.113-4.023-8.088-6.382-25.15 1.161-26.67M71.878 557.936c-2.88-4.134-2.948-9.884-.671-14.38 2.276-4.496 6.65-7.737 11.467-9.217 2.227-.683 4.812-.971 6.75.322 1.81 1.211 2.593 3.584 2.36 5.75-.233 2.166-1.332 4.148-2.626 5.9-4.438 6.01-9.836 11.01-17.28 11.625"
        fill="#f03d5f"
      />
      <Path
        d="M72.882 586.11c-.044.007-.182-.618-.408-1.75l-.939-4.807c-.72-4.04-1.863-9.785-.999-16.137.831-6.322 3.349-11.73 5.987-14.957 1.3-1.634 2.543-2.79 3.463-3.5.445-.374.838-.604 1.086-.78.256-.168.396-.247.408-.23.1.112-2.134 1.488-4.601 4.782-2.5 3.238-4.897 8.552-5.715 14.769-.851 6.223.202 11.916.811 15.978.327 2.04.59 3.693.742 4.842.152 1.146.207 1.784.165 1.79"
        fill="#17282f"
      />
      <Path
        d="M45.547 515.768c.02-.01.146.228.368.69l.94 2.031a414.85 414.85 0 013.315 7.539c2.75 6.385 6.426 15.26 10.263 25.15 3.835 9.897 7.105 18.93 9.379 25.5a412.57 412.57 0 012.633 7.8l.675 2.135c.148.49.216.752.195.76-.02.005-.128-.24-.315-.717l-.787-2.097-2.822-7.731c-2.381-6.53-5.715-15.532-9.548-25.42a1363.66 1363.66 0 00-10.085-25.207c-1.3-3.16-2.36-5.742-3.129-7.613-.341-.853-.616-1.543-.832-2.079-.183-.477-.27-.734-.25-.741"
        fill="#17282f"
      />
      <Path
        d="M62.047 567.47c-5.383-9.158-15.433-15.404-26.029-16.171-2.698-.198-5.943.257-7.147 2.681-1.205 2.427.407 5.298 2.245 7.29 7.649 8.285 20.586 11.173 31.031 6.927"
        fill="#f03d5f"
      />
      <Path
        d="M40.127 558.521c.003-.043.603-.019 1.69.063.543.037 1.209.085 1.971.23.76.14 1.644.223 2.585.485.948.233 1.994.465 3.076.854 1.104.327 2.237.799 3.428 1.303 2.352 1.068 4.848 2.467 7.224 4.283a36.536 36.536 0 015.97 5.908c.78 1.033 1.523 2.01 2.103 3.006.641.956 1.117 1.917 1.565 2.784.479.852.761 1.696 1.074 2.403.316.708.512 1.347.67 1.868.324 1.041.482 1.619.44 1.632-.135.047-.783-2.284-2.582-5.698-.467-.842-.958-1.777-1.609-2.707-.59-.967-1.338-1.918-2.116-2.924a37.926 37.926 0 00-5.902-5.771c-2.333-1.784-4.775-3.172-7.077-4.252-1.165-.51-2.274-.996-3.355-1.337-1.06-.407-2.085-.66-3.014-.918-3.743-.946-6.155-1.074-6.14-1.212M645.37 140.632c-3.92.903-5.83 5.413-6.2 9.419-.371 4.006.14 8.237-1.543 11.892-1.895 4.113-6.418 7.145-6.568 11.67-.091 2.76 1.546 5.355 1.469 8.114-.13 4.533-4.752 7.957-4.995 12.485-.173 3.26 1.999 6.388 1.476 9.61-.408 2.51-2.36 4.486-3.185 6.889-1.645 4.79 1.645 10.064 5.932 12.761 4.777 3.004 10.895 3.78 16.27 2.063 5.377-1.718 9.91-5.898 12.06-11.115 2.373-5.759 1.854-12.243 1.338-18.45-1.607-19.34-2.8-38.714-3.58-58.106"
        fill="#17282f"
      />
      <Path
        d="M633.988 208.884c-.084-.077 1.072-.42 1.79-2.13.35-.838.529-1.962.458-3.255-.045-1.303-.49-2.72-.973-4.318-.447-1.585-1.028-3.422-.695-5.468.336-2.076 1.821-3.78 3.177-5.456.682-.849 1.368-1.73 1.8-2.736.455-.993.551-2.13.21-3.197-.69-2.179-2.824-3.78-3.804-6.296-.486-1.26-.491-2.644-.214-3.89.263-1.26.774-2.4 1.287-3.49 1.044-2.17 2.193-4.161 2.65-6.273.934-4.23.498-8.267 1.135-11.583.576-3.323 1.98-5.821 3.371-7.105.677-.664 1.333-1.018 1.761-1.255.456-.196.698-.287.706-.265.045.074-.988.392-2.276 1.71-1.286 1.3-2.575 3.744-3.079 6.996-.264 1.618-.304 3.436-.37 5.388-.069 1.951-.13 4.07-.626 6.259-.464 2.219-1.645 4.288-2.657 6.42-1.003 2.095-1.924 4.55-1.038 6.847.847 2.269 2.995 3.881 3.802 6.333.394 1.22.265 2.572-.25 3.665-.489 1.112-1.216 2.022-1.91 2.875-1.395 1.685-2.79 3.29-3.108 5.155-.334 1.856.18 3.646.601 5.23.447 1.587.877 3.08.888 4.436.035 1.344-.19 2.515-.596 3.38-.403.871-.953 1.408-1.367 1.683-.41.281-.673.34-.673.34"
        fill="#33535f"
      />
      <Path
        d="M623.49 240.487l-12.035 34.696-50.192 2.69-8.37 18.624 52.402 5.302c10.449 4.32 22.386-.975 26.2-11.619l13.984-39.033-21.99-10.66M727.308 567.596s-36.783-116.825-37.563-120.617c-.706-3.428 13.348-87.498 15.119-109.256l-49.7 1.853-.004.361-21.125 1.172 18.921 238.926h22.87l-2.267-79.269c14.102 37.862 34.312 76.446 34.312 76.446l19.437-9.616"
        fill="#c0776a"
      />
      <Path
        d="M674.492 529.176c.02-.725-.277-26.559-.277-26.559-.286 1.546-8.768-22.43-8.563-23.888.105-.754 8.84 50.447 8.84 50.447"
        fill="#ac584f"
      />
      <Path
        d="M664.685 467.377c-.053 0-.102.515-.148 1.448-.049.935-.06 2.29.031 3.962.032.838.12 1.752.228 2.732.125.977.259 2.025.485 3.112.415 2.18 1.055 4.54 1.87 6.961 1.66 4.832 3.493 9.06 4.794 12.127l1.591 3.612c.39.846.63 1.306.679 1.286.049-.018-.098-.516-.404-1.397a135.18 135.18 0 00-1.368-3.703c-1.175-3.118-2.927-7.378-4.572-12.168-.807-2.398-1.458-4.716-1.903-6.857-.243-1.065-.397-2.095-.547-3.056a46.145 46.145 0 01-.317-2.688 76.356 76.356 0 01-.27-3.924c-.046-.93-.097-1.446-.149-1.447"
        fill="#ac584f"
      />
      <Path
        d="M652.527 581.212l-.01-2.148 23.426-1.02.065 8.86-1.445.096c-6.431.377-32.723 1.461-37.027.172-4.799-1.44 14.99-5.96 14.99-5.96"
        fill="#33535f"
      />
      <Path
        d="M676.335 586.368c0 .01-.138.024-.402.044-.345.021-.724.047-1.15.075l-4.235.197a416.2 416.2 0 01-27.975.122l-4.237-.16c-.427-.025-.805-.046-1.15-.064-.265-.018-.402-.033-.402-.04 0-.011.139-.017.403-.017l1.152.011c1.152.018 2.568.042 4.238.07 3.578.06 8.522.114 13.984.091a683.96 683.96 0 0013.98-.213l4.238-.108 1.152-.022c.265 0 .402.003.404.014"
        fill="#17282f"
      />
      <Path
        d="M644.937 587.121c-.086.012-.156-1-.798-2.018-.626-1.03-1.498-1.544-1.45-1.616.015-.071 1.016.365 1.69 1.467.685 1.094.628 2.185.558 2.167M651.801 583.608c-.065.043-.396-.357-.737-.892-.343-.533-.567-1.001-.5-1.044.065-.041.396.359.737.892.343.536.566 1.001.5 1.044M653.685 582.603c-.052.058-.421-.186-.822-.546-.404-.358-.688-.697-.636-.755.05-.058.42.186.822.545.403.36.688.697.636.756M654.87 580.399c0 .078-.543.15-1.215.16-.674.009-1.219-.046-1.22-.124-.002-.078.542-.148 1.216-.16.672-.009 1.217.046 1.218.124M655.273 578.847c.028.069-.565.338-1.354.4-.79.064-1.418-.11-1.402-.183.012-.08.628-.037 1.379-.1.75-.056 1.353-.196 1.377-.117"
        fill="#17282f"
      />
      <Path
        d="M651.004 581.578c.001.031-.573.104-1.499-.005a8.613 8.613 0 01-1.594-.345c-.294-.103-.599-.18-.915-.372-.148-.099-.313-.237-.372-.466-.063-.224.056-.475.224-.598 1.43-.748 2.865.053 3.4.79.293.378.43.745.492 1 .061.254.057.4.04.403-.052.019-.103-.589-.687-1.274a2.705 2.705 0 00-1.282-.828c-.53-.155-1.282-.194-1.784.128-.238.177-.144.457.121.613.247.159.565.253.843.358.568.191 1.097.317 1.544.395.897.155 1.469.155 1.469.201"
        fill="#17282f"
      />
      <Path
        d="M650.616 581.653c-.021.016-.244-.365-.177-1.04.036-.33.154-.723.405-1.094.263-.334.601-.794 1.244-.768.347.043.519.437.464.689-.025.264-.143.49-.25.67a4.48 4.48 0 01-.706.909c-.468.461-.839.637-.855.609-.026-.036.298-.27.71-.745.204-.238.425-.539.624-.9.204-.32.342-.887-.035-.954-.373-.035-.755.34-.983.639a2.452 2.452 0 00-.42.976c-.112.61.028.998-.021 1.01M675.835 579.99c-.004.054-.667-.06-1.72.069a7.524 7.524 0 00-3.751 1.561 7.51 7.51 0 00-2.336 3.327c-.352 1-.384 1.672-.437 1.665-.018-.001-.026-.17-.003-.47.024-.302.095-.736.25-1.258a7.21 7.21 0 012.349-3.484 7.21 7.21 0 013.908-1.54c.542-.039.982-.015 1.281.028.3.043.463.087.459.102M664.616 584.51c.01.074-1.51.317-3.404.323-1.895.014-3.416-.213-3.407-.286.007-.082 1.53.017 3.406.005 1.877-.008 3.396-.123 3.405-.041"
        fill="#17282f"
      />
      <Path
        d="M669.183 584.461c.057.056-.124.323-.278.672-.158.35-.238.66-.317.655-.076 0-.123-.367.059-.77.18-.403.486-.614.536-.557M670.897 582.312c.055.056-.094.297-.334.542-.242.246-.48.402-.536.347-.055-.054.093-.298.334-.544.239-.245.48-.398.536-.345M673.356 581.324c-.016.08-.325.077-.667.2-.345.113-.589.304-.65.252-.062-.043.133-.375.558-.519.424-.148.783-.005.759.067M675.108 580.856c.03.073-.105.192-.297.268-.194.077-.374.079-.402.007-.029-.074.106-.194.298-.268.193-.078.373-.079.401-.007"
        fill="#17282f"
      />
      <Path
        d="M707.413 579.147l-.889-1.957 20.953-10.527 3.687 8.056-1.279.68c-5.71 2.978-29.252 14.737-33.706 15.322-4.968.654 11.234-11.574 11.234-11.574"
        fill="#33535f"
      />
      <Path
        d="M731.243 574.096c.005.008-.115.079-.347.205-.305.162-.64.339-1.02.538l-3.783 1.916a413.934 413.934 0 01-25.47 11.57l-3.93 1.59-1.077.413c-.248.092-.379.136-.383.126-.002-.009.122-.07.362-.18.317-.137.662-.289 1.054-.46 1.059-.455 2.362-1.013 3.896-1.673a678.655 678.655 0 0012.795-5.645 694.697 694.697 0 0012.667-5.92l3.82-1.835 1.042-.49c.242-.11.37-.163.374-.155"
        fill="#17282f"
      />
      <Path
        d="M702.91 587.645c-.074.045-.553-.848-1.555-1.514-.992-.684-2-.796-1.987-.882-.012-.07 1.079-.084 2.145.647 1.074.717 1.467 1.736 1.398 1.75M707.732 581.628c-.041.066-.508-.164-1.037-.51-.532-.348-.928-.683-.884-.747.042-.067.506.162 1.038.509.53.348.926.683.883.748M709.039 579.94c-.023.075-.459.002-.974-.16-.516-.163-.914-.355-.889-.43.024-.074.46-.002.973.16.515.163.914.355.89.43M709.217 577.442c.034.073-.434.36-1.042.646-.611.284-1.131.456-1.164.387-.032-.071.434-.36 1.044-.644.609-.286 1.13-.458 1.162-.389M708.95 575.863c.053.052-.377.54-1.074.919-.693.382-1.337.48-1.352.408-.021-.08.559-.293 1.217-.655.662-.36 1.154-.734 1.208-.672"
        fill="#17282f"
      />
      <Path
        d="M706.173 580.103c.015.028-.48.33-1.368.609-.442.14-.986.266-1.598.339-.308.026-.618.081-.986.034-.177-.029-.384-.088-.529-.27-.15-.18-.145-.458-.041-.64.997-1.266 2.636-1.126 3.425-.671.423.224.696.504.857.71.16.209.216.342.203.351-.041.039-.336-.494-1.15-.88a2.699 2.699 0 00-1.507-.23c-.547.076-1.25.347-1.576.847-.144.26.056.475.361.51.29.042.621 0 .916-.02.597-.056 1.13-.159 1.57-.272.883-.225 1.403-.46 1.423-.417"
        fill="#17282f"
      />
      <Path
        d="M705.85 580.33c-.013.024-.371-.233-.587-.876a2.457 2.457 0 01-.079-1.165c.104-.412.225-.969.82-1.209.335-.104 1.116.57 1.17.821.083.25-.395.122-.418.332a4.59 4.59 0 01-.272 1.118c-.237.612-.503.924-.53.906-.038-.024.162-.37.342-.972.088-.3.168-.666.2-1.076.056-.374-.05-.949-.42-.856-.357.122-.55.62-.637.986-.079.392-.055.764.017 1.062.147.601.435.899.395.93M728.176 568.485c.017.05-.635.218-1.541.766a7.521 7.521 0 00-2.783 2.96 7.508 7.508 0 00-.768 3.992c.088 1.057.335 1.682.284 1.698-.017.006-.095-.142-.196-.428a6.29 6.29 0 01-.288-1.25 7.207 7.207 0 01.716-4.139 7.21 7.21 0 012.935-3.007c.477-.258.889-.416 1.18-.5.29-.085.457-.109.461-.092M719.792 577.203c.039.062-1.248.905-2.972 1.689-1.724.788-3.204 1.205-3.227 1.135-.025-.079 1.403-.611 3.11-1.392 1.709-.775 3.049-1.504 3.089-1.432"
        fill="#17282f"
      />
      <Path
        d="M723.937 575.287c.076.028.02.345.024.726-.004.383.052.699-.024.728-.068.031-.26-.285-.26-.728 0-.44.191-.757.26-.726M724.621 572.624c.074.028.036.31-.082.633-.118.321-.275.562-.347.533-.073-.025-.037-.308.081-.631.119-.323.275-.562.348-.535M726.461 570.715c.018.08-.265.205-.528.456-.268.245-.41.52-.489.495-.075-.011-.032-.396.296-.7.327-.31.712-.326.721-.251M727.868 569.57c.056.055-.017.22-.164.367-.144.15-.307.224-.363.17-.056-.055.018-.22.162-.367.145-.148.309-.224.365-.17"
        fill="#17282f"
      />
      <Path
        d="M701.641 298.18l-3.901-47.597 20.037.357s.928-7.017-2.024-22.412c-1.81-9.439-8.097-15.23-15.148-18.67l.002-.125-.611-.16c-8.967-4.197-18.353-4.789-18.353-4.789l-24.596.284s-18.79-2.344-29.19 11.05c-4.006 5.16-16.402 40.474-16.402 40.474l29.521 14.219-2.81-19.583s.56 14.197 2.371 18.696c1.01 2.507 3.934 10.288 3.934 10.288l-.383 23.487 57.553-5.519"
        fill="#f03d5f"
      />
      <Path
        d="M688.07 243.673l-3.649 15.555h34.442l-2.267-26.077-28.525 10.522"
        fill="#f03d5f"
      />
      <Path
        d="M718.863 259.228c.002-.103-1.738-.285-4.559-.452-2.824-.165-6.73-.305-11.047-.285-4.317.021-8.222.208-11.044.432-2.82.222-4.554.461-4.546.561.008.11 1.754.06 4.576-.025 2.821-.086 6.714-.188 11.018-.21 4.304-.018 8.2.036 11.023.064 2.823.03 4.573.022 4.579-.085"
        fill="#17282f"
      />
      <Path
        d="M686.587 233.023c-.106.004-.142 1.516-.115 3.957.025 2.44.115 5.81.259 9.53.144 3.72.317 7.086.48 9.522.162 2.435.317 3.939.422 3.935.104-.004.14-1.516.115-3.956-.027-2.44-.113-5.811-.259-9.531-.144-3.72-.317-7.087-.481-9.521-.163-2.435-.316-3.939-.421-3.936"
        fill="#17282f"
      />
      <Path
        d="M683.585 301.779c-1.94 0-3.765-.478-5.477-1.343l15.827-1.517c-4.042 2.765-9.514 2.83-9.514 2.83-.281.02-.56.03-.836.03"
        fill="#a7a9a8"
      />
      <Path
        d="M678.108 300.436c-16.727-8.45-22.861-53.941-22.861-53.941l41.977 46.165v2.535c-.773 1.6-1.953 2.809-3.29 3.724l-15.826 1.517M685.135 269.075l-2.668-4.883 4.006-27.061c.028 2.426.116 5.734.258 9.378.032.835.066 1.651.101 2.443l-2.41 10.276h3.057c.057.479.11.739.153.739h.001c.034-.002.06-.16.08-.458.103.027.376.038.798.038.274 0 .613-.006 1.01-.014l-4.386 9.542"
        fill="#ba2c42"
      />
      <Path
        d="M687.479 259.228h-3.058l2.411-10.276c.12 2.741.253 5.19.379 7.08.096 1.42.186 2.524.268 3.196"
        fill="#ba2c42"
      />
      <Path
        d="M688.51 259.547c-.42 0-.694-.011-.797-.038 0-.008 0-.016.002-.025l1.809.044-.003.005c-.397.008-.736.014-1.01.014"
        fill="#0f191d"
      />
      <Path
        d="M687.632 259.967c-.043 0-.096-.26-.153-.739-.082-.672-.172-1.776-.268-3.196-.126-1.89-.259-4.339-.379-7.08-.035-.792-.07-1.608-.101-2.443-.142-3.644-.23-6.952-.258-9.378l.114-.763 1.08 23.116h.048c-.002.01-.002.017-.002.025-.02.298-.046.456-.08.458h-.001"
        fill="#0f191d"
      />
      <Path
        d="M644.47 280.212c-.046.016-.25-.457-.582-1.328a80.733 80.733 0 01-1.293-3.727 113.158 113.158 0 01-3.294-12.593c-.99-4.996-1.474-9.59-1.632-12.921-.081-1.666-.105-3.014-.081-3.946.019-.932.053-1.446.101-1.448.11-.001.184 2.055.47 5.36.282 3.306.84 7.855 1.822 12.82.991 4.962 2.178 9.392 3.084 12.587l1.079 3.783c.253.896.372 1.398.327 1.413M653.17 296.523c-.183.054-.715-1.17-1.189-2.735-.473-1.567-.709-2.881-.525-2.937.184-.055.716 1.169 1.19 2.736.474 1.565.709 2.88.525 2.936M656.145 296.305c-.176.046-.757-1.792-.785-4.149-.041-2.356.485-4.21.664-4.17.197.037-.01 1.886.03 4.16.026 2.274.289 4.118.091 4.16"
        fill="#17282f"
      />
      <Path
        d="M641.576 271.46c-.085.172-6.956-3.088-15.344-7.279-8.39-4.193-15.121-7.73-15.035-7.901.086-.172 6.955 3.087 15.346 7.28 8.386 4.19 15.118 7.73 15.033 7.9"
        fill="#17282f"
      />
      <Path
        d="M653.683 209.67c.153-6.746.19-13.849.19-13.849s-8.65-1.668-10.158-13.052c-1.438-10.856 2.584-36.329 2.584-36.329 12.637-4.777 25.77-.447 34.429 9.793L678.578 211c-.249 6.357-5.914 11.206-12.72 10.888-6.874-.323-12.322-5.79-12.175-12.218"
        fill="#c0776a"
      />
      <Path
        d="M645.643 166.799c-.048.766.562 1.44 1.362 1.502.8.064 1.486-.505 1.532-1.272.048-.766-.562-1.44-1.361-1.504-.801-.064-1.487.507-1.533 1.274M645.1 164.888c.176.195 1.299-.593 2.863-.548 1.564.023 2.69.857 2.865.67.087-.083-.088-.43-.579-.807-.484-.375-1.314-.75-2.288-.77-.976-.021-1.804.318-2.285.672-.49.356-.661.695-.576.783M661.516 167.787c-.047.766.564 1.438 1.364 1.504.799.062 1.487-.506 1.533-1.274.047-.766-.564-1.44-1.364-1.504-.798-.064-1.486.507-1.533 1.274M661.41 165.877c.177.195 1.3-.592 2.863-.548 1.563.023 2.691.858 2.867.671.084-.084-.09-.43-.581-.807-.483-.376-1.312-.749-2.288-.77-.974-.02-1.803.317-2.284.673-.49.356-.663.695-.576.781M655.433 177.333c.01-.088-.958-.281-2.529-.522-.399-.052-.775-.142-.835-.416-.088-.291.091-.718.298-1.178l1.26-3.01c1.752-4.29 3.032-7.82 2.857-7.89-.173-.069-1.733 3.351-3.487 7.64-.421 1.059-.825 2.067-1.209 3.031-.164.45-.437.959-.25 1.563.102.301.389.525.643.601.254.085.479.095.676.112 1.584.127 2.567.159 2.576.07"
        fill="#17282f"
      />
      <Path
        d="M653.873 195.821s7.615.688 15.288-3.66c0 0-3.884 7.694-15.202 6.34l-.086-2.68"
        fill="#ac584f"
      />
      <Path
        d="M666.419 161.364c-.322.49-1.511.272-2.844.032-1.328-.268-2.515-.504-2.634-1.077-.132-.55 1.246-1.31 3.024-.97 1.779.338 2.779 1.552 2.454 2.015M650.863 159.068c-.122.57-1.396.777-2.866.853-1.47.06-2.757-.03-2.93-.588-.176-.538 1.066-1.414 2.834-1.493 1.768-.084 3.086.675 2.962 1.228"
        fill="#17282f"
      />
      <Path
        d="M655.459 181.079c-.331-.091-.702.096-.867.396a.916.916 0 00.205 1.109c.311.263.81.27 1.127.016a.917.917 0 00.236-1.104.917.917 0 00-1.036-.445"
        fill="#ac584f"
      />
      <Path
        d="M655.824 181.233c.07-.062-.25-.446-.933-.298-.315.07-.73.354-.856.838a1.344 1.344 0 00.472 1.418c.5.353 1.102.28 1.5.009.425-.28.546-.792.48-1.112-.138-.703-.658-.815-.672-.716-.059.088.181.33.136.747-.024.204-.12.393-.318.489-.193.107-.5.105-.676-.03-.184-.129-.278-.42-.24-.645.028-.222.178-.39.359-.493.37-.21.7-.11.748-.207M675.488 169.61c-1.348 3.125-4.64 5.533-4.183 8.906.294 2.179 1.691 4.21 1.419 6.39-.341 2.74-3.187 4.638-3.588 7.367-.495 3.35 2.763 5.952 4.064 9.078 1.895 4.552-.53 9.669-.587 14.598-.086 7.551 6.335 14.604 13.86 15.224 3.044.251 6.472-.668 8.051-3.282 1.301-2.159 1.041-4.899 1.823-7.295 1.162-3.57 4.564-6.18 5.281-9.864 1.307-6.716-6.81-12.273-6.276-19.095.228-2.913 2.027-5.456 2.793-8.277 1-3.696.083-7.859-2.382-10.79-2.003-2.382-4.908-3.949-6.615-6.551-1.935-2.952-2.001-6.695-2.73-10.148-1.778-8.414-8.098-15.724-16.166-18.7-8.07-2.976-17.621-1.52-24.439 3.725 0 0-1.938 8.788 7.083 10.257 9.02 1.47 13.2-.226 14.217 3.39 0 0-1.026 4.224 2.702 8.257 3.73 4.035 7.234 3.19 5.673 6.81"
        fill="#17282f"
      />
      <Path
        d="M689.883 230.559c-.004.024-.286-.007-.823-.087a12.141 12.141 0 01-2.295-.619c-1.926-.704-4.654-2.237-6.98-5.166-1.154-1.451-2.237-3.212-2.966-5.282-.747-2.057-1.174-4.389-1.214-6.845-.057-2.459.292-5.035.963-7.613.335-1.292.77-2.579 1.276-3.858.499-1.284 1.112-2.521 1.464-3.83.379-1.306.328-2.639-.013-3.911-.348-1.273-.94-2.468-1.518-3.65-.58-1.182-1.172-2.36-1.553-3.614-.388-1.243-.532-2.583-.28-3.832.532-2.512 2.057-4.37 2.957-6.277.954-1.891 1.251-3.887 1.207-5.68a13.423 13.423 0 00-2.972-7.866c-1.319-1.55-2.317-2.14-2.267-2.205 0 0 1.058.499 2.471 2.03 1.355 1.527 3.027 4.25 3.259 8.02.08 1.857-.204 3.96-1.179 5.951-.92 1.978-2.392 3.85-2.847 6.148-.469 2.316.627 4.702 1.815 7.023.581 1.184 1.197 2.41 1.573 3.77.374 1.353.428 2.88.016 4.273-.378 1.398-1.004 2.652-1.492 3.906a32.824 32.824 0 00-1.26 3.776c-.665 2.522-1.018 5.036-.978 7.43.014 4.805 1.665 9.008 3.924 11.832 2.214 2.89 4.832 4.45 6.694 5.218 1.887.764 3.035.879 3.018.958"
        fill="#33535f"
      />
      <Path
        d="M688.555 163.277c.004.044-.699.171-1.987.296-1.283.107-3.177.255-5.49-.144-2.26-.413-5.12-1.524-6.931-4.205-.888-1.345-1.24-2.973-1.819-4.476-.544-1.52-1.596-2.836-3.037-3.748-2.918-1.848-6.35-2.076-9.352-2.441-3.018-.34-5.851-.98-7.771-2.422-1.935-1.376-2.927-3.164-3.183-4.452a4.876 4.876 0 01-.102-1.502c.048-.343.085-.518.109-.515.085.001-.092.733.257 1.952.322 1.205 1.324 2.853 3.2 4.116 1.85 1.31 4.56 1.883 7.566 2.187 2.974.336 6.528.521 9.653 2.494 1.541.962 2.736 2.472 3.295 4.086.593 1.586.925 3.149 1.722 4.374 1.626 2.482 4.315 3.616 6.486 4.07 2.226.449 4.102.38 5.381.357 1.284-.041 1.997-.077 2.003-.027M685.247 152.419c.008.034-.539.204-1.563.23-1.016.028-2.537-.152-4.21-.948a9.379 9.379 0 01-2.477-1.722c-.8-.755-1.456-1.731-2.069-2.76-1.203-2.028-2.359-4.53-4.852-5.564-2.443-1.047-5.133-.814-7.47-.656-2.36.233-4.573.301-6.377-.054-1.816-.316-3.178-1.068-3.933-1.764-.383-.345-.643-.652-.785-.88-.15-.225-.218-.346-.199-.361.056-.043.375.43 1.156 1.032.776.601 2.087 1.245 3.843 1.49 1.756.28 3.869.167 6.24-.1 2.349-.186 5.12-.48 7.806.658 1.328.565 2.412 1.563 3.183 2.644.785 1.081 1.348 2.212 1.94 3.232.59 1.02 1.193 1.953 1.923 2.673a9.228 9.228 0 002.292 1.694 9.912 9.912 0 003.996 1.116c.992.057 1.548-.02 1.556.04M693.863 227.681c-.068-.03.356-.888.848-2.529.489-1.636.974-4.096.888-7.147-.104-3.032-.834-6.698-2.842-10.181-.976-1.747-2.457-3.303-3.665-5.22-.6-.957-1.116-2.03-1.343-3.219-.222-1.189-.088-2.452.295-3.598.748-2.302 2.088-4.242 2.376-6.358.356-2.122-.716-4.058-1.73-5.78-.514-.877-1.029-1.744-1.429-2.65a9.532 9.532 0 01-.753-2.784c-.203-1.854.013-3.556.15-5.084.385-3.046.102-5.548-.631-7.086-.712-1.557-1.643-2.024-1.574-2.086l.162.076c.097.064.253.148.424.304.356.289.83.802 1.23 1.588.844 1.557 1.207 4.173.878 7.245-.108 1.535-.286 3.217-.068 4.972.177 1.772 1.09 3.445 2.161 5.179.519.878 1.067 1.794 1.452 2.833.395 1.032.573 2.21.4 3.367-.324 2.332-1.697 4.305-2.387 6.473-.357 1.081-.472 2.193-.277 3.264.203 1.068.67 2.065 1.243 2.985 1.142 1.843 2.633 3.43 3.64 5.259 2.046 3.62 2.736 7.392 2.78 10.49.022 3.118-.548 5.607-1.122 7.24-.3.814-.55 1.438-.768 1.84-.201.41-.317.618-.338.607"
        fill="#33535f"
      />
      <Path
        d="M639.55 476.116s-8.98-85.124-9.495-116.576c-.516-31.455 14.142-62.49 14.142-62.49l57.444-2.429s11.354 31.915 11.558 45.319c.394 26.052-6.923 51.779-6.079 72.444l1.92 63.732"
        fill="#17282f"
      />
      <Path
        d="M710.963 371.47c.012.02-.315.265-.938.709-.16.113-.334.237-.524.369-.18.153-.354.344-.556.537-.404.388-.873.827-1.28 1.434-1.854 2.272-3.208 6.329-4.493 11.393-.71 2.515-1.427 5.336-2.91 8.097-.395.675-.751 1.39-1.274 2.018-.25.318-.476.662-.75.969l-.885.884c-1.2 1.18-2.718 2.07-4.32 2.772-3.216 1.41-6.845 2.077-10.162 3.741-3.338 1.626-5.839 4.776-7.372 8.404-1.618 3.614-2.599 7.407-3.948 10.948-1.326 3.514-3.13 6.934-5.996 9.094-2.844 2.238-6.358 2.75-9.402 2.946-3.092.18-5.956.092-8.525.48-2.559.355-4.827 1.167-6.43 2.427-1.609 1.264-2.547 2.85-2.989 4.207-.454 1.373-.373 2.532-.222 3.269.149.75.36 1.107.313 1.127 0 0-.252-.338-.448-1.094-.201-.746-.332-1.945.1-3.381.417-1.421 1.352-3.083 3.004-4.432 1.657-1.35 3.99-2.213 6.599-2.608 2.616-.427 5.512-.365 8.56-.57 3.014-.218 6.377-.746 9.05-2.88 2.708-2.06 4.448-5.349 5.751-8.827 1.325-3.5 2.3-7.299 3.95-10.991 1.549-3.69 4.202-7.043 7.698-8.725 3.448-1.712 7.08-2.359 10.215-3.723 1.561-.676 3.012-1.516 4.158-2.63l.85-.835c.264-.292.482-.622.725-.927.505-.596.856-1.288 1.245-1.936 1.46-2.665 2.206-5.456 2.942-7.956 1.342-5.036 2.79-9.16 4.754-11.43.431-.603.927-1.038 1.354-1.417.212-.188.397-.376.586-.521l.551-.348c.659-.412 1.007-.616 1.019-.595M711.316 332.077c.024-.001.05.39.075 1.14.012.75-.079 1.862-.399 3.258-.667 2.774-2.693 6.585-6.49 10.033-1.874 1.732-4.138 3.407-6.726 4.915-2.575 1.526-5.413 2.98-8.323 4.624-2.898 1.649-5.888 3.512-8.514 5.988-2.662 2.445-4.655 5.658-6.45 9.062-1.813 3.398-3.418 6.858-5.592 9.852-1.078 1.496-2.297 2.863-3.645 4.032-1.357 1.162-2.835 2.106-4.336 2.888-3.013 1.564-6.083 2.531-8.927 3.422-2.849.881-5.509 1.661-7.833 2.636-2.328.96-4.345 2.046-5.975 3.2-1.63 1.153-2.87 2.364-3.75 3.458-1.776 2.199-2.15 3.792-2.25 3.739-.022-.007.104-.377.37-1.08.309-.681.785-1.696 1.668-2.825.862-1.14 2.098-2.403 3.736-3.607 1.636-1.204 3.668-2.336 6.012-3.337 2.344-1.016 5.014-1.83 7.849-2.734 2.83-.912 5.864-1.893 8.803-3.438 1.464-.774 2.894-1.699 4.2-2.824 1.3-1.136 2.476-2.462 3.526-3.927 2.118-2.93 3.708-6.361 5.531-9.781 1.801-3.419 3.853-6.726 6.596-9.231 2.7-2.53 5.743-4.407 8.668-6.05 2.935-1.638 5.779-3.07 8.344-4.565 2.576-1.472 4.819-3.096 6.688-4.778 3.779-3.352 5.823-7.039 6.56-9.742.716-2.729.477-4.334.584-4.328M630.345 364.047c-.012.004-.05-.082-.117-.258-.057-.178-.18-.434-.257-.794-.163-.712-.266-1.838.133-3.196.741-2.715 3.69-6.092 8.443-7.786 2.365-.812 5.048-1.302 7.842-2.033 2.763-.745 5.774-1.788 8.023-4.099 1.116-1.14 2.06-2.497 2.844-3.989.767-1.505 1.397-3.121 1.993-4.79 1.195-3.325 2.198-6.94 4.227-10.223 2.015-3.311 5.299-5.611 8.697-6.763 3.391-1.245 6.808-1.797 9.98-2.53 3.182-.691 6.155-1.587 8.679-2.954 2.487-1.413 4.47-3.295 5.872-5.29 2.877-4 3.63-8.095 3.732-10.8.063-2.751-.375-4.249-.284-4.262 0 0 .533 1.472.553 4.267-.02 2.746-.705 6.942-3.601 11.08-1.413 2.062-3.43 4.024-5.992 5.508-2.587 1.432-5.623 2.362-8.816 3.076-3.188.752-6.587 1.318-9.885 2.542-3.32 1.143-6.404 3.32-8.347 6.494-1.959 3.164-2.965 6.737-4.175 10.084-.604 1.68-1.25 3.324-2.044 4.868-.813 1.534-1.805 2.948-2.982 4.137-2.388 2.423-5.534 3.472-8.328 4.2-2.835.716-5.502 1.175-7.834 1.944-4.622 1.577-7.557 4.815-8.338 7.399a6.522 6.522 0 00-.256 3.089c.149.701.269 1.07.238 1.079M706.376 436.024c.024-.003.055.284.093.836.031.55-.012 1.376-.246 2.407-.47 2.054-2.056 4.865-5.039 7.204-1.47 1.184-3.247 2.27-5.288 3.138-2.035.874-4.287 1.564-6.639 2.296-2.348.734-4.813 1.502-7.21 2.634-2.414 1.105-4.643 2.724-6.563 4.786-1.945 2.038-3.623 4.264-5.485 6.228-1.855 1.978-3.962 3.606-6.144 4.81-4.388 2.422-8.938 3.254-12.682 3.296-3.77.042-6.764-.75-8.726-1.45-.991-.345-1.727-.69-2.215-.949-.492-.247-.745-.384-.735-.407.011-.02.284.076.794.28.502.216 1.249.519 2.242.82a26.328 26.328 0 008.632 1.215c3.674-.104 8.116-.97 12.376-3.364a24.747 24.747 0 005.963-4.717c1.823-1.935 3.495-4.16 5.477-6.242 1.954-2.104 4.303-3.804 6.774-4.921 2.462-1.152 4.96-1.912 7.316-2.63 2.356-.715 4.597-1.382 6.602-2.214a22.384 22.384 0 005.206-2.995c2.95-2.237 4.544-4.91 5.084-6.886.525-1.996.317-3.178.413-3.175"
        fill="#fafaf9"
      />
      <Path
        d="M699.828 259.284l-11.107.263c-.729 3.741-2.512 6.301-2.512 6.301-9.288-16.123-16.489-37.723-18.277-46.404.261-.868.57-1.827.955-2.9.444-1.237.062-3.58-.147-4.881-.312-1.932-.852-4.534-1.015-5.738-.494-3.668-1.085-4.244-2.365-3.829-1.74.564.713 10.303-.713 10.513-.767.114-1.704-3.222-1.975-5.96-.272-2.737-1.51-11.157-2.416-11.718-1.325-.823-2.481.478-2.147 3.204.339 2.76.767 10.986-.68 11.098-1.425.11-2.621-13.85-2.621-13.85s.225-3.038-1.45-2.966c-3.02.132-.66 14.85-.402 16.243.181.97-1.388 1.148-1.527.096-.141-1.084-.87-13.961-3.946-13.857-2.362.08 1.828 12.128.502 14.921-1.325 2.792-2.245-9.485-4.5-9.316-.838.063-1.458.227.083 7.175.83 3.734 3.263 10.601 5.39 16.285 3.573 19.268 19.249 80.903 43.827 69.62 13.752-6.313 19.334-34.293 19.334-34.293l-12.291-.007"
        fill="#c0776a"
      />
      <Path
        d="M652.43 209.604s.113.021.322-.044c.187-.057.559-.292.501-.77-.032-.827-.162-2.033-.353-3.591-.143-1.57-.612-3.452-.613-5.682-.019-1.116.01-2.316.074-3.588.042-.636.054-1.296.194-1.92.105-.604.509-1.294.976-1.212l.052.01.021-.002c.475-.021.845.348.997.912.167.542.21 1.179.175 1.786l-.001.025.002.017c.311 3.412.647 7.146 1.424 11.134.11.497.22.998.375 1.504.076.253.167.508.277.764.071.132.118.257.227.396.095.116.215.318.557.349.554-.041.714-.46.839-.7a4.23 4.23 0 00.25-.82c.114-.543.171-1.083.213-1.628.148-2.173.072-4.393-.088-6.668-.052-1.15-.335-2.299-.14-3.34.093-.513.306-1.03.656-1.244a.724.724 0 01.574-.073l.316.137c.088.085.068.047.148.197.446.954.675 2.198.924 3.352.238 1.179.442 2.382.631 3.598.187 1.216.359 2.446.504 3.686.12 1.239.299 2.54.615 3.792.16.631.337 1.26.601 1.884.135.314.276.624.55.943.098.136.41.39.798.29.376-.125.483-.423.544-.598.216-.767.152-1.404.141-2.075a45.602 45.602 0 00-.138-1.969c-.096-1.123-.203-2.233-.242-3.33-.017-.545-.018-1.089.04-1.603.034-.251.076-.508.162-.695l.129-.199.052-.033.172-.05c.885-.365 1.179.866 1.415 1.858.204 1.033.334 2.103.542 3.155.352 2.1.799 4.186 1.034 6.192.097.994.168 2.028-.118 2.87-.314.964-.626 1.918-.936 2.86l-.026.086.018.089c1.626 7.17 3.878 13.584 5.967 19.279a202.142 202.142 0 006.084 14.628c1.857 4.024 3.524 7.125 4.675 9.24.584 1.002 1.045 1.796 1.386 2.384.323.537.498.812.516.801.019-.01-.122-.304-.41-.861l-1.284-2.435c-1.084-2.148-2.686-5.272-4.482-9.313a218.917 218.917 0 01-5.917-14.652c-2.04-5.69-4.253-12.122-5.833-19.215l-.008.175c.306-.93.62-1.871.933-2.822.36-1.088.253-2.15.164-3.19-.239-2.086-.675-4.111-1.021-6.222-.207-1.042-.332-2.113-.548-3.206-.126-.544-.244-1.095-.544-1.651-.144-.27-.367-.576-.736-.741-.372-.162-.752-.116-1.052-.043l-.224.064-.303.17a1.34 1.34 0 00-.337.475c-.14.32-.18.616-.222.911a11.84 11.84 0 00-.045 1.72c.039 1.13.147 2.25.241 3.368.055.652.11 1.3.138 1.939.022.622.044 1.309-.099 1.792-.033.14-.1.113-.023.181l.003.005.008.051-.003-.015.004-.045.02-.063-.081-.073c-.145-.17-.293-.447-.407-.723-.237-.558-.412-1.165-.566-1.77-.306-1.223-.478-2.436-.602-3.696-.148-1.254-.324-2.491-.514-3.715a84.715 84.715 0 00-.644-3.63c-.275-1.202-.452-2.358-1.015-3.56-.033-.122-.272-.39-.417-.469a2.04 2.04 0 00-.496-.209 1.45 1.45 0 00-1.128.157c-.662.438-.866 1.132-.986 1.735-.106.621-.09 1.235-.022 1.827.066.569.122 1.128.166 1.69.168 2.246.254 4.455.12 6.567-.036.525-.09 1.048-.192 1.54a3.522 3.522 0 01-.202.69l-.146.25c-.049.112-.09-.025-.088.155.068-.138.003-.06-.049-.175l-.159-.277a6.577 6.577 0 01-.25-.684 17.32 17.32 0 01-.371-1.448c-.79-3.916-1.163-7.66-1.505-11.047v.043c.028-.686-.016-1.339-.219-1.983-.101-.316-.25-.637-.52-.888a1.38 1.38 0 00-.988-.36l.072.008c-.535-.096-.927.23-1.15.55-.227.331-.33.69-.409 1.035-.146.7-.144 1.367-.177 2.004a50.829 50.829 0 00-.021 3.618c.042 2.274.554 4.158.736 5.708.232 1.549.404 2.752.48 3.562.084.386-.227.634-.39.698-.186.081-.297.093-.294.109"
        fill="#ac584f"
      />
      <Path
        d="M565.597 277.641s-3.689-.176-7.724.886c-6.885 1.812-18.772 9.016-19.264 17.914h8.634s-4.835 10.292-3.415 9.339c3.687-2.473 11.025-9.93 11.025-9.93l10.744-18.209"
        fill="#c0776a"
      />
      <Path
        d="M683.367 122.724c-.192.016-.976-7.123-1.751-15.943-.776-8.822-1.25-15.986-1.059-16.004.192-.016.975 7.12 1.751 15.944.776 8.82 1.25 15.986 1.059 16.003M721.243 91.213c.156.112-5.678 8.578-13.028 18.907-7.351 10.333-13.438 18.617-13.594 18.508-.156-.112 5.676-8.576 13.028-18.91 7.351-10.33 13.438-18.617 13.594-18.505M736.979 129.583c.04.188-6.768 1.746-15.202 3.48-8.437 1.733-15.305 2.986-15.345 2.798-.037-.188 6.77-1.745 15.205-3.478 8.435-1.734 15.304-2.987 15.342-2.8"
        fill="#17282f"
      />
      <Path
        d="M283.5 312.724l-47.148 242.399-6.172 31.731 314.75-1.552c14.126-.07 26.645-12.612 31.189-31.246l55.812-228.85c3.45-14.145-4.12-28.858-14.842-28.847l-318.565.334c-7.033.008-13.184 6.571-15.024 16.031"
        fill="#f03d5f"
      />
      <Path
        d="M548.953 584.942c2.266-.545 4.194-1.15 5.836-1.78a25.298 25.298 0 01-5.836 1.78M552.173 577.802c-34.14 0-37.432-39.074-37.434-39.102L484.68 296.497l132.408-.138h.012c8.936 0 15.68 10.23 15.674 21.828a29.755 29.755 0 01-.844 7.02l-24.027 98.517-9.57 39.246-22.215 91.086c-2.343 9.608-6.806 17.596-12.516 23.09.288-.456.376-.726.376-.726-4.295.95-8.223 1.382-11.806 1.382"
        fill="#7e1c2c"
      />
      <Path
        d="M514.739 538.7l-33.326-268.544c-1.365-11.003-10.13-19.21-20.48-19.177l-73.074.238c-5.41.019-10.595 2.318-14.436 6.402l-34.699 36.885-203.236 1.061c-12.419.064-21.96 11.816-20.315 25.02l30.942 248.203c1.369 10.988 10.118 19.185 20.453 19.165l354.195-.7c39.449.818 43.216-10.833 43.216-10.833-45.211 10.019-49.236-37.69-49.24-37.72"
        fill="#f03d5f"
      />
      <Path
        d="M350.065 497.784l-39.4-35.444 11.946-12.83 39.401 35.445-11.947 12.83m-52.602-47.322l-39.4-35.444 11.945-12.831 39.4 35.444-11.945 12.83"
        fill="#f68aa6"
      />
      <Path
        d="M275.015 500.63l-13.202-11.878 35.65-38.29 11.945-12.83 35.65-38.29 13.203 11.878-35.65 38.29-11.946 12.83-35.65 38.29"
        fill="#f68aa6"
      />
      <Path
        d="M565.315 138.377a2.491 2.491 0 01-1.507-2.181l-.532-12.377a2.483 2.483 0 013.056-2.528c1.99.469 4.184.037 6.02-1.19 1.69-1.128 2.825-2.789 3.113-4.558.288-1.763-.258-3.715-1.496-5.355-1.328-1.755-3.288-2.939-5.254-3.163-4.015-.462-8.35 2.614-9.466 6.716a2.487 2.487 0 01-3.052 1.75 2.476 2.476 0 01-1.749-3.054c1.752-6.45 8.408-11.096 14.837-10.356 3.334.384 6.492 2.247 8.652 5.107 2.056 2.72 2.944 6.056 2.439 9.156-.51 3.127-2.427 6.004-5.261 7.896-2.048 1.367-4.399 2.12-6.748 2.203l.413 9.541a2.486 2.486 0 01-3.465 2.393M568.963 143.435a2.037 2.037 0 01-4.062.278 2.035 2.035 0 014.062-.278"
        fill="#f03d5f"
      />
      <Path
        d="M522.47 120.924c.017 0 .058-.275.12-.812l.262-2.384c.06-1.055.33-2.33.645-3.832.175-.747.267-1.577.54-2.417l.828-2.692c1.29-3.746 3.279-8.235 6.63-12.703 3.325-4.457 8.001-8.86 14.004-12.197 2.954-1.763 6.336-2.991 9.878-4.075 3.6-.853 7.415-1.583 11.4-1.49 1.994-.106 4.003.186 6.05.358 1.024.099 2.03.372 3.057.55 1.028.191 2.061.391 3.068.74 4.116 1.057 8.115 2.998 11.925 5.405 7.65 4.813 14.091 12.641 17.624 22.133 1.772 4.748 2.62 9.953 2.614 15.21.105 5.269-.915 10.62-2.79 15.657l-.601 1.522-.08.202.083.188 9.802 22.576.559-.636c-6.885-2.647-13.561-5.211-19.967-7.672l-.248-.095-.193.188c-5.54 5.367-12.156 8.996-18.856 10.885-6.72 1.895-13.488 1.992-19.644.899a43.947 43.947 0 01-16.356-6.487c-4.645-3.033-8.37-6.721-11.243-10.468-2.85-3.79-4.729-7.676-6.146-11.145-1.248-3.547-2.014-6.695-2.384-9.3l-.419-3.468-.067-2.548c-.022-.655-.038-1.172-.052-1.561-.016-.351-.03-.531-.042-.531-.012 0-.023.177-.032.53-.006.39-.014.906-.02 1.565l-.006 2.561.352 3.497c.33 2.631 1.058 5.816 2.279 9.416 1.393 3.522 3.259 7.472 6.113 11.334 2.878 3.82 6.63 7.585 11.324 10.692a44.443 44.443 0 0016.572 6.673c6.25 1.139 13.13 1.067 19.975-.839 6.824-1.901 13.575-5.58 19.235-11.041l-.442.093 19.958 7.703 1.006.388-.445-1.025c-3.173-7.323-6.45-14.878-9.79-22.583l.003.388.615-1.555c1.917-5.149 2.956-10.621 2.848-16.005.004-5.373-.872-10.695-2.687-15.544-3.62-9.695-10.209-17.661-18.013-22.544-3.887-2.443-7.964-4.403-12.156-5.467-1.025-.349-2.076-.55-3.123-.741-1.046-.179-2.07-.452-3.11-.547-2.082-.168-4.126-.454-6.15-.338-4.05-.079-7.925.678-11.573 1.566-3.595 1.119-7.017 2.386-10.005 4.192-6.07 3.423-10.776 7.923-14.103 12.466-3.35 4.55-5.315 9.114-6.564 12.908-.28.961-.547 1.872-.795 2.728-.261.849-.341 1.689-.504 2.444-.289 1.52-.532 2.805-.562 3.868l-.172 2.4c-.034.54-.044.816-.028.817"
        fill="#17282f"
      />
    </Svg>
  );
}