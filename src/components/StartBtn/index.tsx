import style from './styles/index.css'

const StartBtn = ({startAction,position}:{startAction:()=>void, position: string|null}) => {
    if(position === null) return null;
    return(
        <div className={`${style.container} ${style[position]}`}>
            <a onClick={(e)=>{ e.preventDefault(); startAction();}} className={style.button} href="#">
                <span className={style.contentTextBlock}>
                    <span className={style.contentText}>
                        Want to win a prize?
                    </span>
                </span>
                <span className={style.contentImageBlock}>
                    <svg className={style.contentImage} version="1.1" id="Layer_1"  x="0px" y="0px"
                         viewBox="0 0 512 512" >
                        <circle style={{fill:'#C9C8CE'}} cx="256.233" cy="234.362" r="43.903"/>
                    <path style={{fill:'#FFE66A'}} d="M278.492,35.777v64.397l-22.261,22.261l-22.261-22.261V35.808
                        c-18.196,2.064-36.41,6.667-54.172,14.024l59.632,143.964c11.199-4.639,23.219-4.3,33.598-0.001l59.703-144.134
                        C315.459,42.558,297.198,37.862,278.492,35.777z"/>
                    <path style={{fill:'#2FDDD4'}} d="M332.737,419.051c47.186-19.682,86.91-57.296,108.02-108.26l-143.964-59.631
                        c-4.639,11.199-13.378,19.458-23.757,23.759L332.737,419.051z"/>
                    <path style={{fill:'#FF3962'}} d="M440.924,157.852c-19.682-47.186-57.296-86.91-108.26-108.02l-59.632,143.964
                        c11.199,4.639,19.458,13.378,23.759,23.757L440.924,157.852z"/>
                    <path style={{fill:'#2FDDD4'}} d="M179.726,49.665c-47.186,19.682-86.91,57.296-108.02,108.26l143.964,59.632
                        c4.639-11.199,13.378-19.458,23.757-23.759L179.726,49.665z"/>
                    <path style={{fill:'#FF3962'}} d="M71.538,310.864c19.682,47.186,57.296,86.91,108.26,108.02l59.632-143.964
                        c-11.199-4.639-19.458-13.378-23.759-23.757L71.538,310.864z"/>
                    <g>
                        <path style={{fill:'#FFE66A'}} d="M179.732,419.053c47.282,19.448,101.969,20.94,152.933-0.17l-59.632-143.964
                            c-11.199,4.639-23.219,4.3-33.598,0.001L179.732,419.053z"/>
                        <path style={{fill:'#FFE66A'}} d="M71.536,157.859c-19.448,47.282-20.94,101.969,0.17,152.933l143.964-59.632
                            c-4.639-11.199-4.3-23.219-0.001-33.598L71.536,157.859z"/>
                        <path style={{fill:'#FFE66A'}} d="M440.334,310.791c19.448-47.282,20.94-101.969-0.17-152.933L296.199,217.49
                            c4.639,11.199,4.3,23.219,0.001,33.598L440.334,310.791z"/>
                    </g>

                    <path d="M454.532,210.574c-6.007,0.601-10.419,5.872-9.995,11.856c0.394,5.857,5.268,10.381,11.096,10.381
                        c0.187,0,0.376-0.006,0.565-0.014c6.14-0.307,10.868-5.533,10.561-11.671c-0.009-0.185-0.025-0.401-0.043-0.584
                        C466.103,214.423,460.649,209.96,454.532,210.574z"/>
                    <path d="M456.092,244.935c-6.111-0.669-11.602,3.754-12.265,9.866c-1.527,14.092-4.631,27.966-9.252,41.379l-124.275-51.476
                        c1.325-6.845,1.323-13.848,0-20.695l124.133-51.417c1.781,5.122,3.344,10.313,4.67,15.52c1.516,5.957,7.572,9.554,13.533,8.04
                        c5.957-1.517,9.555-7.576,8.038-13.532c-2.326-9.133-5.307-18.208-8.855-27.018c-0.142-0.691-0.348-1.372-0.624-2.032
                        c-21.408-51.326-61.251-91.437-112.315-113.179c-0.6-0.398-1.241-0.741-1.917-1.018c-15.226-6.263-31.111-10.721-47.343-13.309
                        V11.13c0-6.146-4.983-11.13-11.13-11.13H233.97c-6.147,0-11.13,4.984-11.13,11.13v14.983c-15.497,2.507-30.71,6.749-45.371,12.656
                        c-0.689,0.142-1.369,0.348-2.028,0.623C124.117,60.8,84.008,100.639,62.265,151.7c-0.4,0.602-0.744,1.245-1.023,1.924
                        c-21.155,51.429-21.345,107.963-0.613,159.443c0.142,0.708,0.354,1.405,0.637,2.081c21.408,51.326,61.251,91.436,112.315,113.179
                        c0.6,0.398,1.241,0.741,1.917,1.018c4.611,1.897,9.266,3.617,13.952,5.177v10.694h-66.783c-6.147,0-11.13,4.984-11.13,11.13v44.522
                        c0,6.146,4.983,11.13,11.13,11.13h267.13c6.147,0,11.13-4.984,11.13-11.13v-44.522c0-6.146-4.983-11.13-11.13-11.13h-66.783v-10.851
                        c4.005-1.345,7.982-2.817,11.932-4.408c0.707-0.142,1.402-0.353,2.077-0.634c51.325-21.408,91.434-61.247,113.176-112.309
                        c0.4-0.602,0.744-1.245,1.023-1.923c7.627-18.542,12.585-38.02,14.738-57.893C466.621,251.087,462.204,245.596,456.092,244.935z
                         M256.231,422.957c-17.858,0-35.544-2.49-52.567-7.403c-0.423-0.121-0.85-0.217-1.28-0.288c-2.67-0.794-5.33-1.644-7.977-2.558
                        l51.478-124.279c6.845,1.323,13.847,1.322,20.694-0.001l51.419,124.137c-5.646,1.966-11.353,3.646-17.099,5.062
                        C286.331,421.152,271.345,422.957,256.231,422.957z M256.231,201.584c2.795,0,5.507,0.353,8.099,1.015
                        c0.201,0.051,0.402,0.111,0.602,0.167c0.297,0.082,0.595,0.163,0.89,0.254c0.321,0.099,0.64,0.208,0.959,0.317
                        c0.181,0.061,0.364,0.119,0.543,0.185c0.341,0.124,0.679,0.258,1.016,0.393c0.176,0.07,0.354,0.136,0.529,0.209
                        c0.211,0.088,0.417,0.185,0.626,0.277c0.308,0.137,0.619,0.272,0.922,0.417c0.018,0.009,0.035,0.018,0.052,0.027
                        c6.633,3.213,12.025,8.598,15.249,15.225c0.018,0.038,0.038,0.075,0.057,0.111c0.135,0.279,0.258,0.565,0.385,0.849
                        c0.104,0.234,0.211,0.464,0.311,0.701c0.076,0.181,0.144,0.366,0.217,0.549c0.129,0.325,0.259,0.651,0.378,0.979
                        c0.067,0.184,0.126,0.371,0.188,0.557c0.108,0.316,0.217,0.632,0.315,0.951c0.089,0.288,0.168,0.581,0.248,0.873
                        c0.058,0.208,0.119,0.414,0.173,0.623c0.661,2.59,1.014,5.303,1.014,8.096c0,2.795-0.354,5.507-1.015,8.1
                        c-0.051,0.197-0.109,0.394-0.164,0.59c-0.083,0.303-0.166,0.607-0.258,0.906c-0.095,0.308-0.2,0.614-0.305,0.922
                        c-0.066,0.195-0.128,0.392-0.198,0.584c-0.116,0.319-0.243,0.637-0.368,0.954c-0.077,0.195-0.15,0.392-0.23,0.583
                        c-0.088,0.21-0.185,0.416-0.277,0.626c-0.138,0.309-0.273,0.621-0.419,0.925c-0.007,0.013-0.013,0.027-0.02,0.04
                        c-3.222,6.657-8.631,12.065-15.287,15.288c-0.014,0.007-0.029,0.014-0.043,0.022c-0.305,0.147-0.618,0.282-0.927,0.42
                        c-0.207,0.091-0.411,0.187-0.62,0.275c-0.203,0.085-0.41,0.161-0.614,0.243c-0.306,0.121-0.612,0.244-0.919,0.355
                        c-0.199,0.072-0.403,0.137-0.604,0.205c-0.302,0.102-0.602,0.206-0.905,0.299c-0.301,0.092-0.604,0.175-0.909,0.258
                        c-0.196,0.055-0.392,0.112-0.588,0.163c-2.592,0.661-5.306,1.015-8.101,1.015c-2.797,0-5.512-0.354-8.105-1.016
                        c-0.181-0.047-0.361-0.1-0.542-0.15c-0.321-0.088-0.641-0.175-0.957-0.273c-0.285-0.088-0.569-0.186-0.853-0.282
                        c-0.219-0.073-0.441-0.145-0.658-0.223c-0.291-0.105-0.579-0.221-0.867-0.335c-0.215-0.085-0.432-0.166-0.646-0.255
                        c-0.235-0.098-0.463-0.205-0.695-0.307c-0.286-0.128-0.575-0.253-0.857-0.388c-0.035-0.017-0.068-0.034-0.102-0.051
                        c-6.632-3.223-12.02-8.618-15.234-15.255c-0.008-0.017-0.017-0.033-0.026-0.05c-0.144-0.298-0.276-0.604-0.411-0.908
                        c-0.095-0.215-0.195-0.426-0.285-0.643c-0.078-0.185-0.147-0.373-0.222-0.56c-0.129-0.325-0.258-0.649-0.377-0.976
                        c-0.068-0.186-0.127-0.376-0.191-0.564c-0.107-0.313-0.215-0.627-0.312-0.942c-0.09-0.294-0.17-0.591-0.253-0.888
                        c-0.057-0.203-0.116-0.404-0.168-0.608c-0.661-2.591-1.014-5.305-1.014-8.098s0.354-5.507,1.015-8.099
                        c0.051-0.199,0.11-0.396,0.165-0.594c0.083-0.302,0.165-0.603,0.257-0.902c0.096-0.309,0.201-0.617,0.306-0.925
                        c0.066-0.194,0.128-0.39,0.197-0.581c0.116-0.321,0.243-0.638,0.368-0.955c0.076-0.19,0.147-0.384,0.226-0.573
                        c0.096-0.229,0.2-0.453,0.301-0.679c0.13-0.292,0.257-0.585,0.395-0.873c0.014-0.031,0.031-0.06,0.046-0.091
                        c3.227-6.643,8.632-12.04,15.281-15.254c0.008-0.003,0.016-0.008,0.024-0.012c0.308-0.149,0.623-0.285,0.937-0.424
                        c0.205-0.09,0.406-0.185,0.613-0.272c0.206-0.087,0.416-0.165,0.624-0.247c0.302-0.119,0.602-0.239,0.905-0.349
                        c0.215-0.078,0.433-0.147,0.649-0.22c0.285-0.097,0.569-0.195,0.855-0.283c0.327-0.1,0.658-0.191,0.988-0.282
                        c0.169-0.047,0.337-0.097,0.506-0.14C250.715,201.939,253.432,201.584,256.231,201.584z M202.162,244.707L78.025,296.126
                        c-13.994-40.194-14.045-83.341-0.144-123.592l124.279,51.478C200.837,230.857,200.837,237.861,202.162,244.707z M426.059,151.962
                        L301.78,203.44c-3.903-5.777-8.856-10.73-14.633-14.632l51.418-124.137C376.883,83.197,407.428,113.671,426.059,151.962z
                         M245.101,22.261h22.261v13.516v59.787l-11.13,11.13l-11.13-11.13V35.808V22.261z M222.84,48.691v51.483
                        c0,2.952,1.173,5.782,3.26,7.87l22.261,22.261c2.174,2.173,5.022,3.26,7.87,3.26c2.848,0,5.698-1.087,7.87-3.26l22.261-22.261
                        c2.087-2.088,3.26-4.919,3.26-7.87V48.629c9.653,1.725,19.155,4.194,28.43,7.386l-51.476,124.272
                        c-6.845-1.326-13.848-1.323-20.695,0L194.465,56.155C203.74,52.932,213.224,50.436,222.84,48.691z M173.835,64.531l51.478,124.278
                        c-5.777,3.905-10.729,8.856-14.632,14.633L86.544,152.024C105.071,113.706,135.544,83.161,173.835,64.531z M86.403,316.754
                        l124.279-51.478c3.905,5.777,8.856,10.729,14.633,14.632l-51.418,124.138C135.58,385.519,105.035,355.045,86.403,316.754z
                         M311.883,467.478h66.783v22.261h-244.87v-22.261h66.783c6.147,0,11.13-4.984,11.13-11.13v-15.733
                        c14.628,3.162,29.463,4.756,44.299,4.756c14.989,0,29.975-1.626,44.744-4.854v15.831
                        C300.753,462.494,305.736,467.478,311.883,467.478z M338.627,404.186l-51.478-124.279c5.777-3.905,10.729-8.857,14.632-14.633
                        l124.137,51.419C407.392,355.01,376.918,385.554,338.627,404.186z"/>
                    </svg>
                </span>
            </a>
        </div>
    )
}

export default StartBtn;
