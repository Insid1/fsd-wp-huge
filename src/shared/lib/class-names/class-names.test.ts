import { classNames } from 'shared/lib'

describe('class names utility function', () => {
  test('Expects classNames to return given string with only 1st argument', () => {
    const firstParam = 'helloClass'
    const params: Parameters<typeof classNames> = [firstParam]
    const result = classNames(...params)

    expect(result).toEqual(firstParam)
  })

  test('Expects classNames to return given string with 2 arguments with inclusion and exclusion', () => {
    const params: Parameters<typeof classNames> = ['helloClass', { hello: true, bad: false }]
    const result = classNames(...params)

    expect(result).toEqual('helloClass hello')
  })

  test('Expects classNames to return given string with 2 arguments with inclusion and exclusion', () => {
    const params: Parameters<typeof classNames> = ['helloClass', { hello: 'wow', bad: undefined }]
    const result = classNames(...params)

    expect(result).toEqual('helloClass hello')
  })

  test('Expects classNames to return given string with 2 arguments', () => {
    const params: Parameters<typeof classNames> = ['helloClass', { }, ['extraClass']]
    const result = classNames(...params)

    expect(result).toEqual('helloClass extraClass')
  })

  test('Expects classNames to return given string with 3 arguments with inclusion and exclusion', () => {
    const params: Parameters<typeof classNames> = ['helloClass', { hello: true, bad: false }, ['extraClass']]
    const result = classNames(...params)

    expect(result).toEqual('helloClass hello extraClass')
  })
})
