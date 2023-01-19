interface IconErrorProps {
  className: string;
}

export const IconError = ({ className }: IconErrorProps) => {
  return (
    <svg
      aria-hidden="true"
      width="13"
      height="13"
      viewBox="0 0 512.000000 512.000000"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2340 5109c-476-41-923-213-1320-508-132-98-375-335-472-461-314-408-492-862-538-1370-31-352 22-752 145-1086 45-123 167-374 231-474 209-329 525-642 843-834 342-208 717-330 1121-366 466-41 960 58 1384 278 247 128 425 260 632 466 203 203 337 384 460 620 416 799 385 1756-83 2520-198 322-504 630-833 840-99 63-349 185-475 231-333 123-733 175-1095 144zm-477-1355c18-9 179-163 360-342l327-327 328 327c180 179 341 333 359 342 19 10 57 16 96 16 87 0 117-21 312-221 168-171 185-197 185-281 0-75-37-120-370-453l-320-319 333-336c280-281 335-342 345-376 34-117 8-165-202-372-96-95-178-168-199-177-47-19-128-19-175 0-25 11-146 124-364 343l-328 326-328-326c-217-217-340-332-364-343-52-21-133-19-183 5-26 13-107 87-213 193-144 147-172 180-182 218-15 55-7 131 19 172 11 18 164 176 340 352l321 319-334 336c-351 352-356 358-356 445 0 79 17 104 184 274 197 200 227 221 313 221 39 0 77-6 96-16z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </svg>
  );
};