import antfu from '@antfu/eslint-config'

export default antfu({
  svelte: true,
  stylistic: false,
  ignores: ['.github/*', 'dist/*'],
})
