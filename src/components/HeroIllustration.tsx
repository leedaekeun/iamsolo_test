export default function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 340 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-label="러블리 커플 일러스트"
        >
            <ellipse cx="170" cy="240" rx="155" ry="38" fill="rgba(255,160,200,0.12)" />
            <circle cx="170" cy="148" r="118" fill="rgba(255,248,252,0.95)" />
            <circle cx="170" cy="148" r="94" fill="rgba(255,240,248,0.7)" />

            {/* 왼쪽 인물 (여성) */}
            <ellipse cx="108" cy="238" rx="30" ry="8" fill="rgba(255,100,160,0.10)" />
            <ellipse cx="108" cy="105" rx="30" ry="32" fill="#FFD6B0" />
            <path d="M78 93 Q82 60 108 65 Q134 60 138 93 Q132 76 108 73 Q84 76 78 93Z" fill="#4A2C10" />
            <path d="M78 93 Q71 112 76 130" stroke="#4A2C10" strokeWidth="9" strokeLinecap="round" />
            <path d="M138 93 Q145 112 140 130" stroke="#4A2C10" strokeWidth="9" strokeLinecap="round" />
            <ellipse cx="100" cy="107" rx="4.5" ry="5.5" fill="#2D1B00" />
            <ellipse cx="116" cy="107" rx="4.5" ry="5.5" fill="#2D1B00" />
            <circle cx="101.8" cy="105.2" r="1.6" fill="white" />
            <circle cx="117.8" cy="105.2" r="1.6" fill="white" />
            <ellipse cx="92" cy="116" rx="7" ry="3.5" fill="rgba(255,120,150,0.30)" />
            <ellipse cx="124" cy="116" rx="7" ry="3.5" fill="rgba(255,120,150,0.30)" />
            <path d="M104 120 Q108 126 112 120" stroke="#E05070" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M80 200 Q86 148 108 142 Q130 148 136 200Z" fill="#FF80B5" />
            <path d="M86 200 Q108 176 130 200" fill="#FF60A0" />
            <path d="M80 156 Q64 166 61 180" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <path d="M136 156 Q154 166 158 176" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <rect x="98" y="198" width="11" height="36" rx="5.5" fill="#3D2010" />
            <rect x="113" y="198" width="11" height="36" rx="5.5" fill="#3D2010" />
            <ellipse cx="104" cy="234" rx="10" ry="6" fill="#FF4080" />
            <ellipse cx="119" cy="234" rx="10" ry="6" fill="#FF4080" />

            {/* 오른쪽 인물 (남성) */}
            <ellipse cx="232" cy="238" rx="30" ry="8" fill="rgba(80,120,255,0.10)" />
            <ellipse cx="232" cy="100" rx="30" ry="32" fill="#FFD6B0" />
            <path d="M202 90 Q206 60 232 63 Q258 60 262 90 Q256 72 232 70 Q208 72 202 90Z" fill="#2D1B00" />
            <ellipse cx="224" cy="101" rx="4.5" ry="5.5" fill="#2D1B00" />
            <ellipse cx="240" cy="101" rx="4.5" ry="5.5" fill="#2D1B00" />
            <circle cx="225.8" cy="99.2" r="1.6" fill="white" />
            <circle cx="241.8" cy="99.2" r="1.6" fill="white" />
            <ellipse cx="217" cy="110" rx="7" ry="3.5" fill="rgba(255,120,150,0.25)" />
            <ellipse cx="247" cy="110" rx="7" ry="3.5" fill="rgba(255,120,150,0.25)" />
            <path d="M228 113 Q232 118 236 113" stroke="#C06060" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <rect x="202" y="130" width="60" height="68" rx="10" fill="#5B7CCC" />
            <rect x="225" y="130" width="14" height="34" fill="white" />
            <path d="M229 133 L232 162 L235 133" fill="#FF4080" />
            <path d="M202 148 Q182 158 178 174" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <path d="M262 148 Q278 158 282 174" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <rect x="216" y="196" width="13" height="36" rx="6.5" fill="#3A4A6B" />
            <rect x="233" y="196" width="13" height="36" rx="6.5" fill="#3A4A6B" />
            <ellipse cx="222" cy="232" rx="11" ry="6" fill="#1E2D4A" />
            <ellipse cx="240" cy="232" rx="11" ry="6" fill="#1E2D4A" />

            {/* 손 잡기 */}
            <path d="M158 176 Q168 180 178 174" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />

            {/* 하트 */}
            <g className="animate-float-heart" style={{ transformOrigin: '170px 60px' }}>
                <path d="M170 62 C170 62 155 47 155 39 C155 31 170 31 170 39 C170 31 185 31 185 39 C185 47 170 62 170 62Z" fill="#FF4080" />
                <path d="M170 59 C170 59 157 46 157 40 C157 34 170 34 170 40" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>
            <path d="M80 65 C80 65 73 58 73 54 C73 50 80 50 80 54 C80 50 87 50 87 54 C87 58 80 65 80 65Z" fill="#FF80B5" opacity="0.85" />
            <path d="M262 74 C262 74 255 67 255 63 C255 59 262 59 262 63 C262 59 269 59 269 63 C269 67 262 74 262 74Z" fill="#FFB3D1" opacity="0.90" />
            <path d="M56 160 C56 160 51 155 51 152 C51 149 56 149 56 152 C56 149 61 149 61 152 C61 155 56 160 56 160Z" fill="#FF6BAA" opacity="0.60" />
            <path d="M290 148 C290 148 285 143 285 140 C285 137 290 137 290 140 C290 137 295 137 295 140 C295 143 290 148 290 148Z" fill="#FF6BAA" opacity="0.55" />

            {/* 별 */}
            <g fill="#FFD700" opacity="0.75">
                <path d="M52 108 L54.5 102 L57 108 L63 110 L57 112 L54.5 118 L52 112 L46 110Z" />
                <path d="M290 108 L292 103 L294 108 L299 110 L294 112 L292 117 L290 112 L285 110Z" />
                <path d="M158 22 L160 18 L162 22 L167 24 L162 26 L160 30 L158 26 L153 24Z" />
            </g>
            <g opacity="0.55">
                <circle cx="66" cy="198" r="5" fill="#FFB3D1" />
                <circle cx="58" cy="188" r="3.5" fill="#FF80B5" />
                <circle cx="278" cy="186" r="5" fill="#FFB3D1" />
                <circle cx="288" cy="196" r="3.5" fill="#FF80B5" />
            </g>
        </svg>
    );
}
