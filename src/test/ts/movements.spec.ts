import { Expect, Test } from 'alsatian';
import { parseMoveString, Move } from '../../main/ts/movements';
import { Position, equals } from '../../main/ts/position';

export class ParseMoveStringTest {
    @Test('A2-A4')
    testParseA2_A4(): void {
        const move: Move = parseMoveString('A2-A4');
        const expectedFrom: Position = { file: 0, rank: 1 };
        const expectedTo: Position = { file: 0, rank: 3 };
        Expect(move.isValid).toBeTruthy();
        Expect(equals(expectedFrom, move.from)).toBeTruthy();
        Expect(equals(expectedTo, move.to)).toBeTruthy();
    }

    @Test('B8-B3')
    testParseB8_B3(): void {
        const move: Move = parseMoveString('B8-B3');
        const expectedFrom: Position = { file: 1, rank: 7 };
        const expectedTo: Position = { file: 1, rank: 2 };
        Expect(move.isValid).toBeTruthy();
        Expect(equals(expectedFrom, move.from)).toBeTruthy();
        Expect(equals(expectedTo, move.to)).toBeTruthy();
    }

    @Test('H8-H3')
    testParseH8_H3(): void {
        const move: Move = parseMoveString('H8-H3');
        const expectedFrom: Position = { file: 7, rank: 7 };
        const expectedTo: Position = { file: 7, rank: 2 };
        Expect(move.isValid).toBeTruthy();
        Expect(equals(expectedFrom, move.from)).toBeTruthy();
        Expect(equals(expectedTo, move.to)).toBeTruthy();
    }

    @Test('a1-h8 == A1-H8')
    testParseLowerSquare(): void {
        const lowersquareMove: Move = parseMoveString('a1-h8');
        const uppersquareMove: Move = parseMoveString('A1-H8');

        Expect(lowersquareMove.isValid).toBeTruthy();
        Expect(uppersquareMove.isValid).toBeTruthy();

        Expect(equals(lowersquareMove.from, uppersquareMove.from)).toBeTruthy();
        Expect(equals(lowersquareMove.to, uppersquareMove.to)).toBeTruthy();
    }
}
